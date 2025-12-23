"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Plus,
  ArrowLeft,
  Search,
  QrCode,
  Briefcase,
  Calendar,
  Users,
  Edit2,
  Award,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { api } from "@/trpc/react";
import { validateMyKad } from "@/server/better-auth/mykad-plugin";
import { Card, Button, Input, TextArea, Modal, Select } from "./ui";
import { type ProfileType, type Job, type Event } from "@/types";

const toLocalISO = (isoString?: string | Date) => {
  if (!isoString) return "";
  const date = typeof isoString === "string" ? new Date(isoString) : isoString;
  const offsetMs = date.getTimezoneOffset() * 60 * 1000;
  const localDate = new Date(date.getTime() - offsetMs);
  return localDate.toISOString().slice(0, 16);
};

const formatDate = (date?: Date | string) => {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

// Format input with dashes: XXXXXX-XX-XXXX
const formatMykadInput = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 12);
  if (digits.length <= 6) return digits;
  if (digits.length <= 8) return `${digits.slice(0, 6)}-${digits.slice(6)}`;
  return `${digits.slice(0, 6)}-${digits.slice(6, 8)}-${digits.slice(8)}`;
};

interface OrganizerViewProps {
  activeTab: string;
  role: ProfileType;
}

export const OrganizerView: React.FC<OrganizerViewProps> = ({
  activeTab,
  role,
}) => {
  const utils = api.useUtils();

  const orgsQuery = api.organization.listMine.useQuery();
  const eventsQuery = api.organization.listEvents.useQuery();
  const jobsQuery = api.organization.listJobs.useQuery();

  // Dashboard view state
  const [viewMode, setViewMode] = useState<"DASHBOARD" | "TALENT_POOL">(
    "DASHBOARD",
  );
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Load candidates if in talent pool mode
  const candidatesQuery = api.matching.suggestCandidates.useQuery({
    jobId: selectedJob?.id ?? "",
  });

  // Mutations
  const createJobMutation = api.organization.createJob.useMutation({
    onSuccess: async () => {
      await utils.organization.listJobs.invalidate();
      await utils.matching.suggestJobs.invalidate();
    },
  });

  const createEventMutation = api.organization.createEvent.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.organization.listEvents.invalidate(),
        utils.organization.listMine.invalidate(),
      ]);
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  // const updateEventMutation = api.organization.updateEvent.useMutation({
  //   onSuccess: async () => {
  //     await utils.organization.listEvents.invalidate();
  //   },
  // });

  const adminEmploymentCheckInMutation =
    api.checkIn.adminCheckInEmployment.useMutation({
      onSuccess: async () => {
        await Promise.all([
          utils.checkIn.myCheckIns.invalidate(),
          utils.profile.timeline.invalidate(),
        ]);
      },
    });

  const issueCertificateMutation = api.certificate.issue.useMutation({
    onSuccess: () => {
      setCertForm({
        mykadNumber: "",
        title: "",
        description: "",
        type: "ACHIEVEMENT",
      });
    },
  });

  const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [checkInForm, setCheckInForm] = useState({
    mykadNumber: "",
    note: "",
  });
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [qrEvent, setQrEvent] = useState<{ id: string; title: string } | null>(
    null,
  );

  const adminEventCheckInMutation = api.checkIn.adminCheckInToEvent.useMutation(
    {
      onSuccess: async () => {
        setIsCheckInModalOpen(false);
        setCheckInForm({ mykadNumber: "", note: "" });
        alert("Attendee checked in successfully!");
      },
      onError: (error) => {
        alert(error.message);
      },
    },
  );

  const handleCheckInAttendee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEventId) return;
    adminEventCheckInMutation.mutate({
      eventId: selectedEventId,
      mykadNumber: checkInForm.mykadNumber,
      note: checkInForm.note,
    });
  };

  // Simple state for active organization context
  const activeOrgId = orgsQuery.data?.[0]?.id;

  // UI State
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditEventModalOpen, setIsEditEventModalOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [myKadError, setMyKadError] = useState<string | null>(null);

  // Forms State
  const [jobForm, setJobForm] = useState({
    title: "",
    description: "",
    skills: "",
  });
  const [eventForm, setEventForm] = useState({
    title: "",
    location: "",
    start: "",
    end: "",
    skills: "",
  });
  const [verifyForm, setVerifyForm] = useState({
    mykadNumber: "",
    title: "",
    start: "",
    end: "",
    isCurrent: true,
    note: "",
  });
  const [certForm, setCertForm] = useState({
    mykadNumber: "",
    title: "",
    description: "",
    type: "ACHIEVEMENT" as
      | "ATTENDANCE"
      | "ACHIEVEMENT"
      | "CERTIFICATION"
      | "EMPLOYMENT",
  });

  const handleMyKadInput = <T extends { mykadNumber: string }>(
    value: string,
    setForm: React.Dispatch<React.SetStateAction<T>>,
  ) => {
    const formatted = formatMykadInput(value);
    setForm((prev) => ({ ...prev, mykadNumber: formatted }));

    if (formatted.length === 0) {
      setMyKadError(null);
      return;
    }

    if (formatted.replace(/[-\s]/g, "").length >= 12) {
      const result = validateMyKad(formatted);
      if (!result.isValid) {
        setMyKadError(result.error ?? "Invalid MyKad number");
      } else {
        setMyKadError(null);
      }
    } else if (formatted.replace(/[-\s]/g, "").length > 0) {
      setMyKadError(null);
    }
  };

  const handleIssueCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeOrgId || !certForm.mykadNumber || !certForm.title) return;

    issueCertificateMutation.mutate(
      {
        organizationId: activeOrgId,
        mykadNumber: certForm.mykadNumber,
        title: certForm.title,
        description: certForm.description || undefined,
        type: certForm.type,
      },
      {
        onSuccess: () => {
          setIsCertModalOpen(false);
        },
      },
    );
  };

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeOrgId || !jobForm.title) return;

    createJobMutation.mutate(
      {
        organizationId: activeOrgId,
        title: jobForm.title,
        description: jobForm.description || undefined,
        skills: jobForm.skills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      },
      {
        onSuccess: () => {
          setIsCreateModalOpen(false);
          setJobForm({ title: "", description: "", skills: "" });
        },
      },
    );
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeOrgId || !eventForm.title || !eventForm.start) return;

    createEventMutation.mutate(
      {
        organizationId: activeOrgId,
        title: eventForm.title,
        location: eventForm.location || undefined,
        description: undefined,
        startsAt: new Date(eventForm.start).toISOString(),
        endsAt: eventForm.end
          ? new Date(eventForm.end).toISOString()
          : undefined,
        skills: eventForm.skills
          ? eventForm.skills
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean)
          : undefined,
      },
      {
        onSuccess: () => {
          setIsCreateModalOpen(false);
          setEventForm({
            title: "",
            location: "",
            start: "",
            end: "",
            skills: "",
          });
        },
      },
    );
  };

  // const handleUpdateEvent = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!editingId || !eventForm.title || !eventForm.start) return;

  //   updateEventMutation.mutate(
  //     {
  //       id: editingId,
  //       title: eventForm.title,
  //       location: eventForm.location || undefined,
  //       description: undefined,
  //       startsAt: new Date(eventForm.start).toISOString(),
  //       endsAt: eventForm.end
  //         ? new Date(eventForm.end).toISOString()
  //         : undefined,
  //     },
  //     {
  //       onSuccess: () => {
  //         setIsEditEventModalOpen(false);
  //         setEventForm({
  //           title: "",
  //           location: "",
  //           start: "",
  //           end: "",
  //           skills: "",
  //         });
  //         setEditingId(null);
  //       },
  //     },
  //   );
  // };

  const handleSearchTalent = (job: Job) => {
    setSelectedJob(job);
    setViewMode("TALENT_POOL");
  };

  const handleVerifyCandidate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeOrgId || !verifyForm.mykadNumber || !verifyForm.title) return;

    adminEmploymentCheckInMutation.mutate(
      {
        organizationId: activeOrgId,
        mykadNumber: verifyForm.mykadNumber,
        title: verifyForm.title,
        startDate: verifyForm.start
          ? new Date(verifyForm.start).toISOString()
          : undefined,
        endDate: verifyForm.end
          ? new Date(verifyForm.end).toISOString()
          : undefined,
        isCurrent: verifyForm.isCurrent,
        note: verifyForm.note || undefined,
      },
      {
        onSuccess: () => {
          setVerifyForm({
            mykadNumber: "",
            title: "",
            start: "",
            end: "",
            isCurrent: true,
            note: "",
          });
          setMyKadError(null);
        },
      },
    );
  };

  /* --- VIEW: MANAGE (TALENT POOL MODE) --- */
  if (activeTab === "manage" && viewMode === "TALENT_POOL" && selectedJob) {
    return (
      <div className="animate-in slide-in-from-right space-y-6 duration-300">
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setViewMode("DASHBOARD");
              setSelectedJob(null);
            }}
            className="rounded-lg p-2 transition-colors hover:bg-slate-800"
          >
            <ArrowLeft size={20} className="text-slate-400" />
          </button>
          <div>
            <h2 className="text-xl font-bold text-white">
              {selectedJob.title}
            </h2>
            <p className="text-sm text-slate-400">
              {selectedJob.skills?.length || 0} skills required
            </p>
          </div>
        </div>

        {/* Search Filters */}
        <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-3">
          <Search size={18} className="text-slate-500" />
          <input
            type="text"
            placeholder="Filter candidates..."
            className="w-full border-none bg-transparent text-white placeholder-slate-500 outline-none focus:ring-0"
          />
        </div>

        {/* Candidates List */}
        <div className="grid gap-4">
          {candidatesQuery.isLoading ? (
            <Card className="p-6 text-center text-slate-400">
              Loading candidates...
            </Card>
          ) : candidatesQuery.data && candidatesQuery.data.length > 0 ? (
            candidatesQuery.data.map((candidate) => (
              <Card
                key={candidate.profile.userId}
                className="flex items-start justify-between p-4 transition-colors hover:border-emerald-500/30"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-white">
                    {candidate.user.name}
                  </h4>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400">
                      {Math.round(candidate.score)}% Match
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {/* Show matched skills first */}
                      {candidate.overlap.map((skill) => (
                        <span
                          key={skill}
                          className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400"
                        >
                          {skill}
                        </span>
                      ))}
                      {/* Show other skills */}
                      {candidate.skills
                        .filter((s) => !candidate.overlap.includes(s))
                        .slice(0, 3)
                        .map((skill) => (
                          <span
                            key={skill}
                            className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400"
                          >
                            {skill}
                          </span>
                        ))}
                      {candidate.skills.length >
                        candidate.overlap.length + 3 && (
                        <span className="text-[10px] text-slate-500">
                          +
                          {candidate.skills.length -
                            (candidate.overlap.length + 3)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <Link href={`/profile/${candidate.profile.userId}`}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400"
                  >
                    View Profile
                  </Button>
                </Link>
              </Card>
            ))
          ) : (
            <Card className="p-6 text-center text-slate-400">
              No candidates match this role.
            </Card>
          )}
        </div>
      </div>
    );
  }

  /* --- VIEW: MANAGE (DASHBOARD MODE) --- */
  if (activeTab === "manage") {
    return (
      <div className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Dashboard</h2>
            <p className="mt-1 text-slate-400">
              Manage your{" "}
              {role === "COMPANY"
                ? "jobs and candidates"
                : "events and volunteers"}
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsCertModalOpen(true)}
              className="hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
            >
              <Award size={16} className="mr-2" />
              Issue Certificate
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setIsCreateModalOpen(true)}
            >
              <Plus size={16} className="mr-2" />
              New {role === "COMPANY" ? "Job" : "Event"}
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Card className="border-slate-800 bg-slate-900 p-4">
            <div className="text-xs font-medium text-slate-400 uppercase">
              Total {role === "COMPANY" ? "Jobs" : "Events"}
            </div>
            <div className="mt-2 text-2xl font-bold text-white">
              {role === "COMPANY"
                ? (jobsQuery.data?.length ?? 0)
                : (eventsQuery.data?.length ?? 0)}
            </div>
          </Card>
          <Card className="border-slate-800 bg-slate-900 p-4">
            <div className="text-xs font-medium text-slate-400 uppercase">
              Active Listings
            </div>
            <div className="mt-2 text-2xl font-bold text-emerald-400">
              {role === "COMPANY"
                ? (jobsQuery.data?.length ?? 0)
                : (eventsQuery.data?.length ?? 0)}
            </div>
          </Card>
          <Card className="border-slate-800 bg-slate-900 p-4">
            <div className="text-xs font-medium text-slate-400 uppercase">
              Organization
            </div>
            <div className="mt-2 text-lg font-bold text-white">
              {orgsQuery.data?.[0]?.name ?? "—"}
            </div>
          </Card>
          <Card className="border-slate-800 bg-slate-900 p-4">
            <div className="text-xs font-medium text-slate-400 uppercase">
              Created
            </div>
            <div className="mt-2 text-sm font-semibold text-slate-300">
              {orgsQuery.data?.[0]?.createdAt
                ? formatDate(orgsQuery.data[0].createdAt)
                : "—"}
            </div>
          </Card>
        </div>

        {/* Active Items List */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-lg font-bold text-white">
            {role === "COMPANY" ? (
              <>
                <Briefcase size={20} className="text-blue-500" />
                Active Job Listings
              </>
            ) : (
              <>
                <Calendar size={20} className="text-purple-500" />
                Upcoming Events
              </>
            )}
          </h3>

          {role === "COMPANY" ? (
            <div className="grid gap-4 md:grid-cols-2">
              {jobsQuery.isLoading ? (
                <Card className="p-6 text-center text-slate-400">
                  Loading jobs...
                </Card>
              ) : jobsQuery.data && jobsQuery.data.length > 0 ? (
                jobsQuery.data.map((job) => (
                  <Card
                    key={job.id}
                    className="flex flex-col justify-between p-5 transition-colors hover:border-blue-500/30"
                  >
                    <div>
                      <h4 className="font-semibold text-white">{job.title}</h4>
                      <p className="mt-2 text-xs text-slate-400">
                        {job.description ?? "No description"}
                      </p>
                      {job.skills && job.skills.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {job.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                          {job.skills.length > 3 && (
                            <span className="rounded px-2 py-1 text-xs text-slate-400">
                              +{job.skills.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-4 w-full justify-center hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
                      onClick={() =>
                        handleSearchTalent({
                          ...job,
                          description: job.description ?? "",
                        })
                      }
                    >
                      <Search size={14} className="mr-2" />
                      Find Candidates
                    </Button>
                  </Card>
                ))
              ) : (
                <Card className="p-6 text-center text-slate-400">
                  No jobs posted yet. Create one to get started!
                </Card>
              )}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {eventsQuery.isLoading ? (
                <Card className="p-6 text-center text-slate-400">
                  Loading events...
                </Card>
              ) : eventsQuery.data && eventsQuery.data.length > 0 ? (
                eventsQuery.data.map((event) => (
                  <Card
                    key={event.id}
                    className="flex flex-col justify-between p-5 transition-colors hover:border-purple-500/30"
                  >
                    <div>
                      <h4 className="font-semibold text-white">
                        {event.title}
                      </h4>
                      <p className="mt-2 text-xs text-slate-400">
                        {formatDate(event.startsAt)}
                        {event.endsAt && ` - ${formatDate(event.endsAt)}`}
                      </p>
                      {event.location && (
                        <p className="mt-1 text-xs text-slate-500">
                          📍 {event.location}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                        onClick={() => {
                          setEditingId(event.id);
                          setEventForm({
                            title: event.title,
                            location: event.location ?? "",
                            start: toLocalISO(event.startsAt),
                            end: toLocalISO(event.endsAt || undefined),
                            skills: "",
                          });
                          setIsEditEventModalOpen(true);
                        }}
                      >
                        <Edit2 size={14} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                        onClick={() => {
                          setSelectedEventId(event.id);
                          setIsCheckInModalOpen(true);
                        }}
                      >
                        <Users size={14} className="mr-2" />
                        Check In
                      </Button>
                    </div>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="mt-2 w-full"
                      onClick={() => {
                        setQrEvent({ id: event.id, title: event.title });
                        setIsQRModalOpen(true);
                      }}
                    >
                      <QrCode size={14} className="mr-2" />
                      Show QR Code
                    </Button>
                  </Card>
                ))
              ) : (
                <Card className="p-6 text-center text-slate-400">
                  No events created yet. Create one to get started!
                </Card>
              )}
            </div>
          )}
        </div>

        {/* Create Modal */}
        <Modal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          title={role === "COMPANY" ? "Post a New Job" : "Create New Event"}
        >
          {role === "COMPANY" ? (
            <form className="space-y-4" onSubmit={handleCreateJob}>
              <Input
                label="Job Title"
                placeholder="e.g. Senior React Developer"
                value={jobForm.title}
                onChange={(e) =>
                  setJobForm({ ...jobForm, title: e.target.value })
                }
                required
              />
              <TextArea
                label="Job Description"
                placeholder="Describe the role and responsibilities..."
                rows={4}
                value={jobForm.description}
                onChange={(e) =>
                  setJobForm({ ...jobForm, description: e.target.value })
                }
              />
              <Input
                label="Required Skills (comma separated)"
                placeholder="e.g. React, TypeScript, Node.js"
                value={jobForm.skills}
                onChange={(e) =>
                  setJobForm({ ...jobForm, skills: e.target.value })
                }
              />
              <Button
                type="submit"
                className="w-full"
                isLoading={createJobMutation.isPending}
              >
                Post Job
              </Button>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handleCreateEvent}>
              <Input
                label="Event Title"
                placeholder="e.g. Tech Career Fair 2024"
                value={eventForm.title}
                onChange={(e) =>
                  setEventForm({ ...eventForm, title: e.target.value })
                }
                required
              />
              <Input
                label="Location"
                placeholder="e.g. Convention Center, KL"
                value={eventForm.location}
                onChange={(e) =>
                  setEventForm({ ...eventForm, location: e.target.value })
                }
              />
              <Input
                label="Start Date & Time"
                type="datetime-local"
                value={eventForm.start}
                onChange={(e) =>
                  setEventForm({ ...eventForm, start: e.target.value })
                }
                required
              />
              <Input
                label="End Date & Time"
                type="datetime-local"
                value={eventForm.end}
                onChange={(e) =>
                  setEventForm({ ...eventForm, end: e.target.value })
                }
              />
              <Input
                label="Required Skills (comma separated)"
                placeholder="e.g. Communication, Leadership"
                value={eventForm.skills}
                onChange={(e) =>
                  setEventForm({ ...eventForm, skills: e.target.value })
                }
              />
              <Button
                type="submit"
                className="w-full"
                isLoading={createEventMutation.isPending}
              >
                Create Event
              </Button>
            </form>
          )}
        </Modal>

        {/* Issue Certificate Modal */}
        <Modal
          isOpen={isCertModalOpen}
          onClose={() => {
            setIsCertModalOpen(false);
            setMyKadError(null);
          }}
          title="Issue E-Certificate"
        >
          <form className="space-y-4" onSubmit={handleIssueCertificate}>
            <div>
              <Input
                label="Recipient MyKad IC Number"
                placeholder="XXXXXX-XX-XXXX"
                value={certForm.mykadNumber}
                onChange={(e) => handleMyKadInput(e.target.value, setCertForm)}
                required
                className={`font-mono text-lg tracking-widest ${myKadError ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {myKadError && (
                <p className="mt-1 text-xs text-red-500">{myKadError}</p>
              )}
            </div>
            <Input
              label="Certificate Title"
              placeholder="e.g. Best Volunteer Award"
              value={certForm.title}
              onChange={(e) =>
                setCertForm({ ...certForm, title: e.target.value })
              }
              required
            />
            <TextArea
              label="Description"
              placeholder="Describe the achievement or recognition..."
              rows={3}
              value={certForm.description}
              onChange={(e) =>
                setCertForm({ ...certForm, description: e.target.value })
              }
            />
            <Select
              label="Certificate Type"
              value={certForm.type}
              onChange={(e) =>
                setCertForm({
                  ...certForm,
                  type: e.target.value as
                    | "ATTENDANCE"
                    | "ACHIEVEMENT"
                    | "CERTIFICATION"
                    | "EMPLOYMENT",
                })
              }
            >
              <option value="ATTENDANCE">Attendance</option>
              <option value="ACHIEVEMENT">Achievement</option>
              <option value="CERTIFICATION">Certification</option>
              <option value="EMPLOYMENT">Employment</option>
            </Select>
            <Button
              type="submit"
              className="w-full"
              isLoading={issueCertificateMutation.isPending}
            >
              <Award size={16} className="mr-2" />
              Issue Certificate
            </Button>
          </form>
        </Modal>

        {/* Check In Attendee Modal */}
        <Modal
          isOpen={isCheckInModalOpen}
          onClose={() => {
            setIsCheckInModalOpen(false);
            setMyKadError(null);
          }}
          title="Check In Attendee"
        >
          <form className="space-y-4" onSubmit={handleCheckInAttendee}>
            <div>
              <Input
                label="Attendee MyKad IC Number"
                placeholder="XXXXXX-XX-XXXX"
                value={checkInForm.mykadNumber}
                onChange={(e) =>
                  handleMyKadInput(e.target.value, setCheckInForm)
                }
                required
                className={`font-mono text-lg tracking-widest ${myKadError ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {myKadError && (
                <p className="mt-1 text-xs text-red-500">{myKadError}</p>
              )}
            </div>
            <TextArea
              label="Note (Optional)"
              placeholder="Any notes about this attendee..."
              rows={3}
              value={checkInForm.note}
              onChange={(e) =>
                setCheckInForm({ ...checkInForm, note: e.target.value })
              }
            />
            <Button
              type="submit"
              className="w-full"
              isLoading={adminEventCheckInMutation.isPending}
            >
              Check In Attendee
            </Button>
          </form>
        </Modal>

        {/* QR Code Modal */}
        <Modal
          isOpen={isQRModalOpen}
          onClose={() => setIsQRModalOpen(false)}
          title="Event QR Code"
        >
          <div className="flex flex-col items-center justify-center space-y-6 p-4">
            <div className="text-center">
              <h3 className="text-lg font-bold text-white">{qrEvent?.title}</h3>
              <p className="text-sm text-slate-400">
                Scan to check in to this event
              </p>
            </div>
            <div className="rounded-xl bg-white p-4">
              {qrEvent && (
                <QRCodeSVG
                  value={JSON.stringify({
                    eventId: qrEvent.id,
                    action: "CHECK_IN",
                  })}
                  size={200}
                />
              )}
            </div>
            <p className="text-xs text-slate-500">
              Attendees can scan this code using the TalentSync app to verify
              their attendance.
            </p>
          </div>
        </Modal>

        {/* Edit Event Modal */}
        {/* <Modal
          isOpen={isEditEventModalOpen}
          onClose={() => setIsEditEventModalOpen(false)}
          title="Edit Event Details"
        >
          <form className="space-y-4" onSubmit={handleUpdateEvent}>
            <Input
              label="Event Title"
              value={eventForm.title}
              onChange={(e) =>
                setEventForm({ ...eventForm, title: e.target.value })
              }
              required
            />
            <Input
              label="Location"
              value={eventForm.location}
              onChange={(e) =>
                setEventForm({ ...eventForm, location: e.target.value })
              }
            />
            <Input
              label="Start Date & Time"
              type="datetime-local"
              value={eventForm.start}
              onChange={(e) =>
                setEventForm({ ...eventForm, start: e.target.value })
              }
              required
            />
            <Input
              label="End Date & Time"
              type="datetime-local"
              value={eventForm.end}
              onChange={(e) =>
                setEventForm({ ...eventForm, end: e.target.value })
              }
            />
            <Button
              type="submit"
              className="w-full"
              isLoading={updateEventMutation.isPending}
            >
              Save Changes
            </Button>
          </form>
        </Modal> */}
      </div>
    );
  }

  /* --- VIEW: VERIFY --- */
  if (activeTab === "verify") {
    return (
      <div className="mx-auto max-w-xl space-y-6">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
            <QrCode size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white">Verify Candidate</h2>
          <p className="mt-2 text-slate-400">
            Manually verify a user&apos;s employment history to add to their
            immutable profile.
          </p>
        </div>

        <Card className="border-emerald-500/20 p-6 shadow-emerald-500/5">
          <form className="space-y-4" onSubmit={handleVerifyCandidate}>
            <div>
              <Input
                label="Candidate MyKad IC Number"
                placeholder="XXXXXX-XX-XXXX"
                value={verifyForm.mykadNumber}
                onChange={(e) =>
                  handleMyKadInput(e.target.value, setVerifyForm)
                }
                required
                className={`font-mono text-lg tracking-widest ${myKadError ? "border-red-500 focus:border-red-500" : ""}`}
              />
              {myKadError && (
                <p className="mt-1 text-xs text-red-500">{myKadError}</p>
              )}
            </div>
            <Input
              label="Job Title"
              placeholder="e.g. Senior Developer"
              value={verifyForm.title}
              onChange={(e) =>
                setVerifyForm({ ...verifyForm, title: e.target.value })
              }
              required
            />
            <Input
              label="Start Date"
              type="date"
              value={verifyForm.start}
              onChange={(e) =>
                setVerifyForm({ ...verifyForm, start: e.target.value })
              }
            />
            <Input
              label="End Date"
              type="date"
              value={verifyForm.end}
              onChange={(e) =>
                setVerifyForm({ ...verifyForm, end: e.target.value })
              }
            />
            <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/50 p-3">
              <input
                type="checkbox"
                id="isCurrent"
                checked={verifyForm.isCurrent}
                onChange={(e) =>
                  setVerifyForm({
                    ...verifyForm,
                    isCurrent: e.target.checked,
                  })
                }
                className="rounded border-slate-700"
              />
              <label htmlFor="isCurrent" className="text-sm text-slate-400">
                Currently employed at this position
              </label>
            </div>
            <TextArea
              label="Verification Note"
              placeholder="Optional notes about this employment..."
              rows={3}
              value={verifyForm.note}
              onChange={(e) =>
                setVerifyForm({ ...verifyForm, note: e.target.value })
              }
            />
            <Button
              type="submit"
              className="w-full"
              isLoading={adminEmploymentCheckInMutation.isPending}
            >
              Verify Employment
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="mt-10 text-center text-slate-500">Settings placeholder</div>
  );
};
