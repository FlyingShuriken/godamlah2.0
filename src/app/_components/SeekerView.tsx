"use client";

import React, { useState, useEffect } from "react";
import {
  Clock,
  Globe,
  Search,
  ExternalLink,
  Edit2,
  Save,
  X,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { api } from "@/trpc/react";
import { Card, Button, Input, TextArea, Modal } from "./ui";

const formatDateStr = (dateStr?: string | Date) => {
  if (!dateStr) return "Present";
  const date = typeof dateStr === "string" ? new Date(dateStr) : dateStr;
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

interface SeekerViewProps {
  activeTab: string;
}

export const SeekerView: React.FC<SeekerViewProps> = ({ activeTab }) => {
  const profileQuery = api.profile.getMine.useQuery();
  const timelineQuery = api.profile.timeline.useQuery();
  const jobMatchesQuery = api.matching.suggestJobs.useQuery();
  const eventMatchesQuery = api.matching.suggestEvents.useQuery();
  const checkInsQuery = api.checkIn.myCheckIns.useQuery();

  const utils = api.useUtils();

  const profileMutation = api.profile.upsert.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.profile.getMine.invalidate(),
        utils.profile.timeline.invalidate(),
      ]);
    },
  });

  const checkInEventMutation = api.checkIn.checkInToEvent.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.checkIn.myCheckIns.invalidate(),
        utils.profile.timeline.invalidate(),
      ]);
    },
  });

  const checkInEmploymentMutation = api.checkIn.checkInEmployment.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.checkIn.myCheckIns.invalidate(),
        utils.profile.timeline.invalidate(),
      ]);
    },
  });

  // Local state for profile editing
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    headline: "",
    bio: "",
    skills: "",
    consentTalentPool: true,
  });

  // Check-in form state
  const [eventCheckInId, setEventCheckInId] = useState("");
  const [eventCheckInNote, setEventCheckInNote] = useState("");
  const [employmentOrgId, setEmploymentOrgId] = useState("");
  const [employmentTitle, setEmploymentTitle] = useState("");
  const [employmentStart, setEmploymentStart] = useState("");
  const [employmentNote, setEmploymentNote] = useState("");

  // Load data into form
  useEffect(() => {
    if (profileQuery.data) {
      setFormData({
        headline: profileQuery.data.headline || "",
        bio: profileQuery.data.bio || "",
        skills: profileQuery.data.skills?.join(", ") || "",
        consentTalentPool: profileQuery.data.consentTalentPool ?? true,
      });
    }
  }, [profileQuery.data]);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    profileMutation.mutate({
      headline: formData.headline,
      bio: formData.bio,
      skills: formData.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      consentTalentPool: formData.consentTalentPool,
    });
    setIsEditing(false);
  };

  const handleEventCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventCheckInId) return;
    checkInEventMutation.mutate({
      eventId: eventCheckInId,
      note: eventCheckInNote || undefined,
    });
    setEventCheckInNote("");
    setEventCheckInId("");
  };

  const handleEmploymentCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!employmentOrgId || !employmentTitle) return;
    checkInEmploymentMutation.mutate({
      organizationId: employmentOrgId,
      title: employmentTitle,
      note: employmentNote || undefined,
      startDate: employmentStart
        ? new Date(employmentStart).toISOString()
        : undefined,
    });
    setEmploymentNote("");
    setEmploymentTitle("");
    setEmploymentStart("");
    setEmploymentOrgId("");
  };

  if (profileQuery.isLoading || !profileQuery.data) {
    return (
      <div className="p-10 text-center text-slate-500">
        Loading your profile...
      </div>
    );
  }

  const profile = profileQuery.data;

  /* --- VIEW: HOME FEED --- */
  if (activeTab === "home") {
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        {/* Profile Summary Card */}
        <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-900 border-emerald-500/20">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {profile.fullName}
              </h2>
              <p className="text-emerald-400 font-medium">
                {profile.headline || "No headline yet"}
              </p>
              <p className="text-slate-400 text-sm mt-2 max-w-md">
                {profile.bio || "No bio added yet"}
              </p>
            </div>
            <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center text-2xl border border-slate-700">
              {(profile.fullName?.charAt(0) ?? "U")}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.skills && profile.skills.length > 0 ? (
              profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-500">No skills added</span>
            )}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800/50 flex items-center gap-2">
            <Globe
              size={14}
              className={
                profile.consentTalentPool
                  ? "text-emerald-500"
                  : "text-slate-500"
              }
            />
            <span className="text-xs text-slate-400">
              Talent Pool Visibility:{" "}
              <span
                className={
                  profile.consentTalentPool
                    ? "text-emerald-400"
                    : "text-slate-500"
                }
              >
                {profile.consentTalentPool ? "Public" : "Private"}
              </span>
            </span>
          </div>
        </Card>

        {/* Timeline Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Clock size={18} className="text-emerald-500" />
            Verified Timeline
          </h3>

          {timelineQuery.data && timelineQuery.data.length > 0 ? (
            timelineQuery.data.map((item) => (
              <div
                key={item.id}
                className="relative pl-6 border-l border-slate-800 pb-6 last:pb-0"
              >
                <div
                  className={`absolute -left-1.5 top-1 h-3 w-3 rounded-full ${
                    item.verificationStatus === "VERIFIED"
                      ? "bg-emerald-500"
                      : "bg-slate-600"
                  }`}
                />
                <Card className="p-4 ml-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-white">
                        {item.title || "Experience"}
                      </h4>
                      <p className="text-sm text-slate-400 mt-1">
                        {formatDateStr(item.startDate ?? undefined)}
                        {item.endDate && ` - ${formatDateStr(item.endDate ?? undefined)}`}
                      </p>
                      {item.notes && (
                        <p className="text-xs text-slate-500 mt-2">{item.notes}</p>
                      )}
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        item.verificationStatus === "VERIFIED"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-slate-700/50 text-slate-400"
                      }`}
                    >
                      {item.verificationStatus}
                    </span>
                  </div>
                </Card>
              </div>
            ))
          ) : (
            <Card className="p-6 text-center text-slate-400">
              No experiences yet. Check-in to events or add employment history.
            </Card>
          )}
        </div>
      </div>
    );
  }

  /* --- VIEW: JOBS --- */
  if (activeTab === "jobs") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4 bg-slate-900/50 p-2 rounded-xl border border-slate-800">
          <Search className="text-slate-500 ml-2" size={20} />
          <input
            placeholder="Search for jobs..."
            className="bg-transparent border-none text-white focus:ring-0 w-full placeholder-slate-500 outline-none"
          />
        </div>

        {jobMatchesQuery.isLoading ? (
          <div className="text-center text-slate-400">Loading jobs...</div>
        ) : jobMatchesQuery.data && jobMatchesQuery.data.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobMatchesQuery.data.map(({ job, overlap }) => (
              <Card
                key={job.id}
                className="p-5 flex flex-col justify-between hover:border-emerald-500/30 transition-colors cursor-pointer group"
              >
                <div>
                  <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {job.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2">
                    {job.description || "No description"}
                  </p>
                  {job.skills && job.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {job.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 rounded text-xs bg-slate-800 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 3 && (
                        <span className="px-2 py-1 rounded text-xs text-slate-400">
                          +{job.skills.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                  {overlap !== undefined && (
                    <p className="text-xs text-emerald-400 mt-3 font-medium">
                      {Math.round((overlap.length / Math.max(job.skills.length, 1)) * 100)}% Match
                    </p>
                  )}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-4 w-full justify-between group-hover:bg-emerald-500/10 group-hover:text-emerald-400 group-hover:border-emerald-500/30"
                >
                  View Details <ExternalLink size={14} />
                </Button>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-6 text-center text-slate-400">
            No job matches found. Try improving your profile skills!
          </Card>
        )}
      </div>
    );
  }

  /* --- VIEW: EVENTS --- */
  if (activeTab === "events") {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Recommended Events</h2>
        </div>

        {eventMatchesQuery.isLoading ? (
          <div className="text-center text-slate-400">Loading events...</div>
        ) : eventMatchesQuery.data && eventMatchesQuery.data.length > 0 ? (
          <div className="grid gap-4">
            {eventMatchesQuery.data.map(({ event }) => (
              <Card
                key={event.id}
                className="p-0 overflow-hidden flex flex-col md:flex-row hover:border-emerald-500/30 transition-colors"
              >
                <div className="bg-slate-800 w-full md:w-32 h-24 md:h-auto flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-700">
                  <Calendar size={32} className="text-emerald-500/50" />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-white">{event.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {formatDateStr(event.startsAt)}
                      {event.endsAt && ` - ${formatDateStr(event.endsAt)}`}
                    </p>
                    {event.location && (
                      <p className="text-xs text-slate-500 mt-1">
                        📍 {event.location}
                      </p>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full mt-3 md:w-auto justify-center hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-6 text-center text-slate-400">
            No events recommended at this time.
          </Card>
        )}
      </div>
    );
  }

  /* --- VIEW: CHECK-INS --- */
  if (activeTab === "checkins") {
    const recentCheckIns = checkInsQuery.data ?? [];

    return (
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Event Check-in Form */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle size={20} className="text-emerald-500" />
              <h3 className="text-lg font-semibold text-white">Event Check-in</h3>
            </div>
            <form onSubmit={handleEventCheckIn} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Select Event
                </label>
                <select
                  value={eventCheckInId}
                  onChange={(e) => setEventCheckInId(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                  required
                >
                  <option value="">Choose an event...</option>
                  {eventMatchesQuery.data?.map(({ event }) => (
                    <option key={event.id} value={event.id}>
                      {event.title} ({formatDateStr(event.startsAt)})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Note (Optional)
                </label>
                <textarea
                  value={eventCheckInNote}
                  onChange={(e) => setEventCheckInNote(e.target.value)}
                  placeholder="Add any additional details..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                isLoading={checkInEventMutation.isPending}
                disabled={!eventCheckInId}
              >
                Record Event Check-in
              </Button>

              {checkInEventMutation.isSuccess && (
                <div className="rounded-lg bg-emerald-950/50 border border-emerald-500/30 p-3">
                  <p className="text-xs text-emerald-400">✓ Check-in recorded successfully</p>
                </div>
              )}
              {checkInEventMutation.error && (
                <div className="rounded-lg bg-red-950/50 border border-red-500/30 p-3">
                  <p className="text-xs text-red-400">Error: {checkInEventMutation.error.message}</p>
                </div>
              )}
            </form>
          </Card>

          {/* Employment Check-in Form */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle size={20} className="text-blue-500" />
              <h3 className="text-lg font-semibold text-white">Employment</h3>
            </div>
            <form onSubmit={handleEmploymentCheckIn} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Organization
                </label>
                <Input
                  value={employmentOrgId}
                  onChange={(e) => setEmploymentOrgId(e.target.value)}
                  placeholder="Company name or ID"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Role Title
                </label>
                <Input
                  value={employmentTitle}
                  onChange={(e) => setEmploymentTitle(e.target.value)}
                  placeholder="e.g. Event Coordinator"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Start Date
                </label>
                <input
                  type="datetime-local"
                  value={employmentStart}
                  onChange={(e) => setEmploymentStart(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Note (Optional)
                </label>
                <textarea
                  value={employmentNote}
                  onChange={(e) => setEmploymentNote(e.target.value)}
                  placeholder="Add any additional details..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                isLoading={checkInEmploymentMutation.isPending}
                disabled={!employmentOrgId || !employmentTitle}
              >
                Record Employment
              </Button>

              {checkInEmploymentMutation.isSuccess && (
                <div className="rounded-lg bg-emerald-950/50 border border-emerald-500/30 p-3">
                  <p className="text-xs text-emerald-400">✓ Employment recorded successfully</p>
                </div>
              )}
              {checkInEmploymentMutation.error && (
                <div className="rounded-lg bg-red-950/50 border border-red-500/30 p-3">
                  <p className="text-xs text-red-400">Error: {checkInEmploymentMutation.error.message}</p>
                </div>
              )}
            </form>
          </Card>
        </div>

        {/* Recent Check-ins */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Clock size={18} className="text-slate-400" />
            Recent Check-ins
          </h3>

          {recentCheckIns.length > 0 ? (
            <div className="space-y-3">
              {recentCheckIns.map((checkIn) => (
                <div
                  key={checkIn.id}
                  className="flex items-start justify-between p-3 rounded-lg bg-slate-950/50 border border-slate-800"
                >
                  <div>
                    <p className="text-sm font-medium text-white">
                      {checkIn.type === "EVENT"
                        ? (checkIn.event?.title ?? "Event Check-in")
                        : "Employment Check-in"}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {checkIn.organization?.name ?? "Organization"}
                    </p>
                    {checkIn.note && (
                      <p className="text-xs text-slate-500 mt-1">{checkIn.note}</p>
                    )}
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      checkIn.verificationStatus === "VERIFIED"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-slate-700/50 text-slate-400"
                    }`}
                  >
                    {checkIn.verificationStatus}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-400 text-center py-6">
              No check-ins yet. Start recording your attendance and employment!
            </p>
          )}
        </Card>
      </div>
    );
  }

  /* --- VIEW: PROFILE --- */
  return (
    <div className="max-w-xl mx-auto">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Edit Profile</h2>
          <Button
            variant="ghost"
            onClick={() => setIsEditing(!isEditing)}
            size="sm"
          >
            {isEditing ? <X size={16} /> : <Edit2 size={16} />}
          </Button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <Input
              label="Full Name"
              value={profile.fullName ?? ""}
              disabled
              className="opacity-60 cursor-not-allowed"
            />
            <Input
              label="Headline"
              value={formData.headline}
              onChange={(e) =>
                setFormData({ ...formData, headline: e.target.value })
              }
              placeholder="e.g. Full Stack Developer"
            />
            <TextArea
              label="Bio"
              rows={4}
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
              placeholder="Tell us about yourself..."
            />
            <Input
              label="Skills (Comma separated)"
              value={formData.skills}
              onChange={(e) =>
                setFormData({ ...formData, skills: e.target.value })
              }
              placeholder="e.g. React, TypeScript, Node.js"
            />

            <div className="flex items-start gap-3 p-3 border border-slate-800 rounded-lg bg-slate-950/50">
              <input
                type="checkbox"
                id="talentPool"
                checked={formData.consentTalentPool}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    consentTalentPool: e.target.checked,
                  })
                }
                className="mt-1 rounded border-slate-700"
              />
              <label htmlFor="talentPool" className="text-sm text-slate-400">
                Allow organizations to view my profile in the talent pool
              </label>
            </div>

            <Button
              type="submit"
              className="w-full"
              isLoading={profileMutation.isPending}
            >
              <Save size={16} className="mr-2" />
              Save Changes
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Full Name
              </label>
              <p className="text-white mt-1">{profile.fullName}</p>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Headline
              </label>
              <p className="text-white mt-1">
                {profile.headline || "—"}
              </p>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Bio
              </label>
              <p className="text-white mt-1">
                {profile.bio || "—"}
              </p>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Skills
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {profile.skills && profile.skills.length > 0 ? (
                  profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-500">—</span>
                )}
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Globe size={14} />
                Talent Pool Visibility
              </label>
              <p
                className={`text-sm mt-1 font-medium ${
                  profile.consentTalentPool
                    ? "text-emerald-400"
                    : "text-slate-500"
                }`}
              >
                {profile.consentTalentPool ? "Visible" : "Hidden"}
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
