"use client";

import React, { useState } from "react";
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
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { api } from "@/trpc/react";
import { validateMyKad } from "@/server/better-auth/mykad-plugin";
import { type ProfileType, type Job } from "@/types";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

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
  const candidatesQuery = api.matching.suggestCandidates.useQuery(
    { jobId: selectedJob?.id ?? "" },
    { enabled: !!selectedJob },
  );

  // Mutations
  const createJobMutation = api.organization.createJob.useMutation({
    onSuccess: async () => {
      await utils.organization.listJobs.invalidate();
      await utils.matching.suggestJobs.invalidate();
      setIsCreateJobOpen(false);
    },
  });

  const createEventMutation = api.organization.createEvent.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.organization.listEvents.invalidate(),
        utils.organization.listMine.invalidate(),
      ]);
      setIsCreateEventOpen(false);
    },
  });

  const adminEmploymentCheckInMutation =
    api.checkIn.adminCheckInEmployment.useMutation({
      onSuccess: async () => {
        await Promise.all([
          utils.checkIn.myCheckIns.invalidate(),
          utils.profile.timeline.invalidate(),
        ]);
        setVerifyMyKad("");
        setVerifyJobTitle("");
        setVerifyStartDate("");
        setVerifyNote("");
        setVerifyResult(null);
      },
    });

  // Form States
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);

  // Job Form
  const [jobForm, setJobForm] = useState({
    title: "",
    description: "",
    type: "FULL_TIME",
    location: "",
    skills: "",
    orgId: "",
  });

  // Event Form
  const [eventForm, setEventForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    orgId: "",
  });

  // Verify Form
  const [verifyMyKad, setVerifyMyKad] = useState("");
  const [verifyJobTitle, setVerifyJobTitle] = useState("");
  const [verifyStartDate, setVerifyStartDate] = useState("");
  const [verifyNote, setVerifyNote] = useState("");
  const [verifyResult, setVerifyResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // --- Render Functions ---

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Header Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <Briefcase className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {jobsQuery.data?.length ?? 0}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Events
            </CardTitle>
            <Calendar className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {eventsQuery.data?.length ?? 0}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Candidates
            </CardTitle>
            <Users className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--</div>
            <p className="text-muted-foreground text-xs">
              Across all job listings
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Jobs Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Job Listings</h3>
          <Button onClick={() => setIsCreateJobOpen(true)} className="gap-2">
            <Plus size={16} /> Post Job
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobsQuery.isLoading ? (
            <p>Loading jobs...</p>
          ) : jobsQuery.data?.length === 0 ? (
            <Card className="col-span-full border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-8 text-center">
                <Briefcase className="text-muted-foreground/50 mb-4 h-12 w-12" />
                <h3 className="text-lg font-medium">No jobs posted</h3>
                <p className="text-muted-foreground text-sm">
                  Create a job posting to find talent.
                </p>
              </CardContent>
            </Card>
          ) : (
            jobsQuery.data?.map((job) => (
              <Card key={job.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="line-clamp-1 text-lg">
                    {job.title}
                  </CardTitle>
                  <CardDescription>{job.organization.name}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">{job.type}</Badge>
                    {job.location && (
                      <Badge variant="outline">{job.location}</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground line-clamp-2 text-sm">
                    {job.description}
                  </p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSelectedJob(job);
                      setViewMode("TALENT_POOL");
                    }}
                  >
                    Find Talent
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Events Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Events</h3>
          <Button onClick={() => setIsCreateEventOpen(true)} className="gap-2">
            <Plus size={16} /> Create Event
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {eventsQuery.isLoading ? (
            <p>Loading events...</p>
          ) : eventsQuery.data?.length === 0 ? (
            <Card className="col-span-full border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-8 text-center">
                <Calendar className="text-muted-foreground/50 mb-4 h-12 w-12" />
                <h3 className="text-lg font-medium">No events created</h3>
                <p className="text-muted-foreground text-sm">
                  Host an event to engage with talent.
                </p>
              </CardContent>
            </Card>
          ) : (
            eventsQuery.data?.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle className="line-clamp-1 text-lg">
                    {event.title}
                  </CardTitle>
                  <CardDescription>
                    {formatDate(event.date)} • {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md dark:bg-white/5">
                    <QRCodeSVG value={event.id} size={120} />
                  </div>
                  <p className="text-muted-foreground mt-2 text-center text-xs">
                    Scan to check in
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );

  const renderTalentPool = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setViewMode("DASHBOARD");
            setSelectedJob(null);
          }}
        >
          <ArrowLeft size={20} />
        </Button>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Talent Pool: {selectedJob?.title}
          </h2>
          <p className="text-muted-foreground">
            AI-matched candidates based on skills and experience.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {candidatesQuery.isLoading ? (
          <p>Finding best matches...</p>
        ) : candidatesQuery.data?.length === 0 ? (
          <p className="text-muted-foreground col-span-full text-center">
            No matching candidates found yet.
          </p>
        ) : (
          candidatesQuery.data?.map((candidate) => (
            <Card key={candidate.id}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg font-bold text-slate-600 backdrop-blur-md dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300">
                    {candidate.fullName?.charAt(0)}
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      {candidate.fullName}
                    </CardTitle>
                    <CardDescription>{candidate.headline}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {candidate.skills.slice(0, 5).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {candidate.skills.length > 5 && (
                    <Badge variant="outline" className="text-xs">
                      +{candidate.skills.length - 5} more
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Match Score</span>
                  <span className="font-bold text-emerald-600">
                    {Math.round(candidate.matchScore * 100)}%
                  </span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10 dark:bg-slate-950">
                  <div
                    className="h-full bg-emerald-500"
                    style={{ width: `${candidate.matchScore * 100}%` }}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Candidate</Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );

  const renderVerify = () => (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">Verify Employment</h2>
        <p className="text-muted-foreground">
          Manually verify an employee's position in your organization.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Employee Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="verifyMyKad">MyKad Number</Label>
            <Input
              id="verifyMyKad"
              placeholder="e.g. 900101-14-1234"
              value={verifyMyKad}
              onChange={(e) => setVerifyMyKad(formatMykadInput(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="verifyJobTitle">Job Title</Label>
            <Input
              id="verifyJobTitle"
              placeholder="e.g. Senior Engineer"
              value={verifyJobTitle}
              onChange={(e) => setVerifyJobTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="verifyStartDate">Start Date</Label>
            <Input
              id="verifyStartDate"
              type="date"
              value={verifyStartDate}
              onChange={(e) => setVerifyStartDate(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="verifyNote">Note (Optional)</Label>
            <Textarea
              id="verifyNote"
              placeholder="Additional verification details..."
              value={verifyNote}
              onChange={(e) => setVerifyNote(e.target.value)}
            />
          </div>

          {verifyResult && (
            <div
              className={cn(
                "flex items-center gap-2 rounded-md p-3 text-sm",
                verifyResult.success
                  ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
                  : "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400",
              )}
            >
              {verifyResult.success ? (
                <CheckCircle size={16} />
              ) : (
                <XCircle size={16} />
              )}
              {verifyResult.message}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={() => {
              if (!orgsQuery.data?.[0]?.id) return;
              adminEmploymentCheckInMutation.mutate(
                {
                  mykad: verifyMyKad,
                  organizationId: orgsQuery.data[0].id,
                  title: verifyJobTitle,
                  startDate: new Date(verifyStartDate),
                  note: verifyNote,
                },
                {
                  onSuccess: () => {
                    setVerifyResult({
                      success: true,
                      message: "Employment verified successfully!",
                    });
                    // Clear form after delay
                    setTimeout(() => {
                      setVerifyMyKad("");
                      setVerifyJobTitle("");
                      setVerifyStartDate("");
                      setVerifyNote("");
                      setVerifyResult(null);
                    }, 3000);
                  },
                  onError: (err) => {
                    setVerifyResult({
                      success: false,
                      message: err.message,
                    });
                  },
                },
              );
            }}
            disabled={
              !verifyMyKad ||
              !verifyJobTitle ||
              !verifyStartDate ||
              adminEmploymentCheckInMutation.isPending
            }
          >
            {adminEmploymentCheckInMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify & Add to Record"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );

  // --- Main Render ---

  if (activeTab === "verify") {
    return renderVerify();
  }

  if (viewMode === "TALENT_POOL") {
    return renderTalentPool();
  }

  return (
    <>
      {renderDashboard()}

      {/* Create Job Dialog */}
      <Dialog open={isCreateJobOpen} onOpenChange={setIsCreateJobOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Post a New Job</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                value={jobForm.title}
                onChange={(e) =>
                  setJobForm({ ...jobForm, title: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="jobType">Type</Label>
                <Select
                  value={jobForm.type}
                  onValueChange={(val) => setJobForm({ ...jobForm, type: val })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="FULL_TIME">Full Time</SelectItem>
                    <SelectItem value="PART_TIME">Part Time</SelectItem>
                    <SelectItem value="CONTRACT">Contract</SelectItem>
                    <SelectItem value="INTERNSHIP">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="jobLocation">Location</Label>
                <Input
                  id="jobLocation"
                  value={jobForm.location}
                  onChange={(e) =>
                    setJobForm({ ...jobForm, location: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="jobDesc">Description</Label>
              <Textarea
                id="jobDesc"
                value={jobForm.description}
                onChange={(e) =>
                  setJobForm({ ...jobForm, description: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="jobSkills">
                Required Skills (comma separated)
              </Label>
              <Input
                id="jobSkills"
                value={jobForm.skills}
                onChange={(e) =>
                  setJobForm({ ...jobForm, skills: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="jobOrg">Organization</Label>
              <Select
                value={jobForm.orgId}
                onValueChange={(val) => setJobForm({ ...jobForm, orgId: val })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select organization" />
                </SelectTrigger>
                <SelectContent>
                  {orgsQuery.data?.map((org) => (
                    <SelectItem key={org.id} value={org.id}>
                      {org.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateJobOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() =>
                createJobMutation.mutate({
                  title: jobForm.title,
                  description: jobForm.description,
                  type: jobForm.type as any,
                  location: jobForm.location,
                  skills: jobForm.skills
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean),
                  organizationId: jobForm.orgId,
                })
              }
              disabled={
                !jobForm.title || !jobForm.orgId || createJobMutation.isPending
              }
            >
              {createJobMutation.isPending ? "Posting..." : "Post Job"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create Event Dialog */}
      <Dialog open={isCreateEventOpen} onOpenChange={setIsCreateEventOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New Event</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="eventTitle">Event Title</Label>
              <Input
                id="eventTitle"
                value={eventForm.title}
                onChange={(e) =>
                  setEventForm({ ...eventForm, title: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="eventDate">Date & Time</Label>
                <Input
                  id="eventDate"
                  type="datetime-local"
                  value={eventForm.date}
                  onChange={(e) =>
                    setEventForm({ ...eventForm, date: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="eventLocation">Location</Label>
                <Input
                  id="eventLocation"
                  value={eventForm.location}
                  onChange={(e) =>
                    setEventForm({ ...eventForm, location: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="eventDesc">Description</Label>
              <Textarea
                id="eventDesc"
                value={eventForm.description}
                onChange={(e) =>
                  setEventForm({ ...eventForm, description: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="eventOrg">Organization</Label>
              <Select
                value={eventForm.orgId}
                onValueChange={(val) =>
                  setEventForm({ ...eventForm, orgId: val })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select organization" />
                </SelectTrigger>
                <SelectContent>
                  {orgsQuery.data?.map((org) => (
                    <SelectItem key={org.id} value={org.id}>
                      {org.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsCreateEventOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() =>
                createEventMutation.mutate({
                  title: eventForm.title,
                  description: eventForm.description,
                  date: new Date(eventForm.date),
                  location: eventForm.location,
                  organizationId: eventForm.orgId,
                })
              }
              disabled={
                !eventForm.title ||
                !eventForm.orgId ||
                createEventMutation.isPending
              }
            >
              {createEventMutation.isPending ? "Creating..." : "Create Event"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
