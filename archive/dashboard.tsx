"use client";

import { useEffect, useState } from "react";

import { api } from "@/trpc/react";

const formatDate = (value?: Date | string | null) => {
  if (!value) return "";
  const date = value instanceof Date ? value : new Date(value);
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
};

const formatDateTime = (value?: Date | string | null) => {
  if (!value) return "";
  const date = value instanceof Date ? value : new Date(value);
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

export function DashboardClient({ userName }: { userName: string }) {
  const utils = api.useUtils();

  const profileQuery = api.profile.getMine.useQuery();
  const profileTypeQuery = api.profile.getProfileType.useQuery();
  const timelineQuery = api.profile.timeline.useQuery();
  const checkInsQuery = api.checkIn.myCheckIns.useQuery();
  const organizationsQuery = api.organization.listMine.useQuery();
  const eventsQuery = api.organization.listEvents.useQuery();
  const jobMatchesQuery = api.matching.suggestJobs.useQuery();
  const eventMatchesQuery = api.matching.suggestEvents.useQuery();
  const careerInsightsQuery = api.matching.careerInsights.useQuery();
  const certificatesQuery = api.certificate.getMine.useQuery();

  const profileMutation = api.profile.upsert.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.profile.getMine.invalidate(),
        utils.profile.timeline.invalidate(),
      ]);
    },
  });

  const setProfileTypeMutation = api.profile.setProfileType.useMutation({
    onSuccess: async () => {
      await utils.profile.getProfileType.invalidate();
    },
  });

  const orgMutation = api.organization.create.useMutation({
    onSuccess: async () => {
      await utils.organization.listMine.invalidate();
    },
  });

  const eventMutation = api.organization.createEvent.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.organization.listEvents.invalidate(),
        utils.organization.listMine.invalidate(),
      ]);
    },
  });

  const jobMutation = api.organization.createJob.useMutation({
    onSuccess: async () => {
      await utils.organization.listJobs.invalidate();
      await utils.matching.suggestJobs.invalidate();
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

  const adminEventCheckInMutation = api.checkIn.adminCheckInToEvent.useMutation(
    {
      onSuccess: async () => {
        await Promise.all([
          utils.checkIn.myCheckIns.invalidate(),
          utils.profile.timeline.invalidate(),
        ]);
      },
    },
  );

  const adminEmploymentCheckInMutation =
    api.checkIn.adminCheckInEmployment.useMutation({
      onSuccess: async () => {
        await Promise.all([
          utils.checkIn.myCheckIns.invalidate(),
          utils.profile.timeline.invalidate(),
        ]);
      },
    });

  const [fullName, setFullName] = useState("");
  const [headline, setHeadline] = useState("");
  const [bio, setBio] = useState("");
  const [skillsInput, setSkillsInput] = useState("");
  const [consentTalentPool, setConsentTalentPool] = useState(true);
  const [profileTypeSelection, setProfileTypeSelection] = useState<
    "USER" | "ORGANIZER" | "COMPANY"
  >("USER");

  const [orgName, setOrgName] = useState("");
  const [orgType, setOrgType] = useState("COMPANY");
  const [ssmNumber, setSsmNumber] = useState("");
  const [industry, setIndustry] = useState("");

  const [eventOrgId, setEventOrgId] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventStartsAt, setEventStartsAt] = useState("");
  const [eventEndsAt, setEventEndsAt] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const [jobOrgId, setJobOrgId] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobSkillsInput, setJobSkillsInput] = useState("");

  const [employmentOrgId, setEmploymentOrgId] = useState("");
  const [employmentTitle, setEmploymentTitle] = useState("");
  const [employmentStart, setEmploymentStart] = useState("");
  const [employmentNote, setEmploymentNote] = useState("");
  const [eventCheckInId, setEventCheckInId] = useState("");
  const [eventCheckInNote, setEventCheckInNote] = useState("");

  // Certificate Issue State
  const [certOrgId, setCertOrgId] = useState("");
  const [certUserId, setCertUserId] = useState("");
  const [certTitle, setCertTitle] = useState("");
  const [certType, setCertType] = useState<
    "ATTENDANCE" | "ACHIEVEMENT" | "CERTIFICATION" | "EMPLOYMENT"
  >("ACHIEVEMENT");
  const [certDescription, setCertDescription] = useState("");

  const issueCertificateMutation = api.certificate.issue.useMutation({
    onSuccess: () => {
      setCertUserId("");
      setCertTitle("");
      setCertDescription("");
      alert("Certificate issued successfully!");
    },
  });

  const handleIssueCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certOrgId || !certUserId || !certTitle) return;
    issueCertificateMutation.mutate({
      organizationId: certOrgId,
      userId: certUserId,
      title: certTitle,
      type: certType,
      description: certDescription,
    });
  };

  const [adminEventId, setAdminEventId] = useState("");
  const [adminEventUserId, setAdminEventUserId] = useState("");
  const [adminEventNote, setAdminEventNote] = useState("");

  const [adminEmploymentOrgId, setAdminEmploymentOrgId] = useState("");
  const [adminEmploymentUserId, setAdminEmploymentUserId] = useState("");
  const [adminEmploymentTitle, setAdminEmploymentTitle] = useState("");
  const [adminEmploymentStart, setAdminEmploymentStart] = useState("");
  const [adminEmploymentEnd, setAdminEmploymentEnd] = useState("");
  const [adminEmploymentNote, setAdminEmploymentNote] = useState("");
  const [adminEmploymentIsCurrent, setAdminEmploymentIsCurrent] =
    useState(true);

  useEffect(() => {
    const profile = profileQuery.data;
    if (!profile) return;

    setFullName(profile.fullName ?? userName);
    setHeadline(profile.headline ?? "");
    setBio(profile.bio ?? "");
    setSkillsInput(profile.skills?.join(", ") ?? "");
    setConsentTalentPool(profile.consentTalentPool ?? true);
  }, [profileQuery.data, userName]);

  useEffect(() => {
    const type = profileTypeQuery.data?.profileType;
    if (!type) return;
    setProfileTypeSelection(type);
  }, [profileTypeQuery.data?.profileType]);

  useEffect(() => {
    const orgs = organizationsQuery.data;
    if (orgs?.length) {
      setEventOrgId((prev) => (prev ? prev : orgs[0]!.id));
      setJobOrgId((prev) => (prev ? prev : orgs[0]!.id));
      setEmploymentOrgId((prev) => (prev ? prev : orgs[0]!.id));
      setAdminEmploymentOrgId((prev) => (prev ? prev : orgs[0]!.id));
    }
  }, [organizationsQuery.data]);

  useEffect(() => {
    const events = eventsQuery.data;
    if (events?.length) {
      setEventCheckInId((prev) => (prev ? prev : events[0]!.id));
      setAdminEventId((prev) => (prev ? prev : events[0]!.id));
    }
  }, [eventsQuery.data]);

  const experiences = timelineQuery.data ?? [];
  const checkIns = checkInsQuery.data ?? [];
  const jobMatches = jobMatchesQuery.data ?? [];
  const eventMatches = eventMatchesQuery.data ?? [];

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    const skills = skillsInput
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    profileMutation.mutate({
      fullName,
      headline,
      bio,
      skills,
      consentTalentPool,
    });
  };

  const handleProfileTypeSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileTypeMutation.mutate({ profileType: profileTypeSelection });
  };

  const handleOrgCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgName.trim()) return;

    orgMutation.mutate({
      name: orgName.trim(),
      type: orgType as "COMPANY" | "ORGANIZER",
      ssmNumber: ssmNumber.trim() || undefined,
      industry: industry.trim() || undefined,
    });

    setOrgName("");
    setSsmNumber("");
    setIndustry("");
  };

  const handleEventCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventOrgId || !eventTitle || !eventStartsAt) return;

    eventMutation.mutate({
      organizationId: eventOrgId,
      title: eventTitle,
      description: eventDescription || undefined,
      location: eventLocation || undefined,
      startsAt: new Date(eventStartsAt).toISOString(),
      endsAt: eventEndsAt ? new Date(eventEndsAt).toISOString() : undefined,
    });

    setEventTitle("");
    setEventStartsAt("");
    setEventEndsAt("");
    setEventDescription("");
    setEventLocation("");
  };

  const handleJobCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobOrgId || !jobTitle) return;

    const skills = jobSkillsInput
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    jobMutation.mutate({
      organizationId: jobOrgId,
      title: jobTitle,
      description: jobDescription || undefined,
      skills,
    });

    setJobTitle("");
    setJobDescription("");
    setJobSkillsInput("");
  };

  const handleEventCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventCheckInId) return;
    checkInEventMutation.mutate({
      eventId: eventCheckInId,
      note: eventCheckInNote || undefined,
    });
    setEventCheckInNote("");
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
  };

  const handleAdminEventCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminEventId || !adminEventUserId) return;
    adminEventCheckInMutation.mutate({
      eventId: adminEventId,
      userId: adminEventUserId,
      note: adminEventNote || undefined,
    });
    setAdminEventNote("");
  };

  const handleAdminEmploymentCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !adminEmploymentOrgId ||
      !adminEmploymentUserId ||
      !adminEmploymentTitle
    )
      return;
    adminEmploymentCheckInMutation.mutate({
      organizationId: adminEmploymentOrgId,
      userId: adminEmploymentUserId,
      title: adminEmploymentTitle,
      startDate: adminEmploymentStart
        ? new Date(adminEmploymentStart).toISOString()
        : undefined,
      endDate: adminEmploymentEnd
        ? new Date(adminEmploymentEnd).toISOString()
        : undefined,
      isCurrent: adminEmploymentIsCurrent,
      note: adminEmploymentNote || undefined,
    });
    setAdminEmploymentNote("");
  };

  const loading =
    profileQuery.isLoading ||
    timelineQuery.isLoading ||
    checkInsQuery.isLoading ||
    organizationsQuery.isLoading ||
    eventsQuery.isLoading;

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-2 rounded-2xl bg-slate-900/60 p-6 shadow-lg ring-1 shadow-black/20 ring-slate-800">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">Welcome back</p>
            <h1 className="text-2xl font-semibold text-white">
              {fullName || userName}
            </h1>
          </div>
          {loading && <span className="text-xs text-amber-300">Syncing…</span>}
        </div>
        <p className="text-sm text-slate-300">
          Capture verified attendance and employment, keep your profile current,
          and see quick job matches powered by your skills.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl bg-slate-900/60 p-6 shadow-lg ring-1 shadow-black/20 ring-slate-800 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              Profile & Visibility
            </h2>
            {profileMutation.isPending && (
              <span className="text-xs text-amber-300">Saving…</span>
            )}
          </div>
          <form
            onSubmit={handleProfileTypeSave}
            className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-200"
          >
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Profile type</span>
              <select
                value={profileTypeSelection}
                onChange={(e) =>
                  setProfileTypeSelection(
                    e.target.value as "USER" | "ORGANIZER" | "COMPANY",
                  )
                }
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              >
                <option value="USER">User</option>
                <option value="ORGANIZER">Organizer</option>
                <option value="COMPANY">Company</option>
              </select>
            </div>
            <button
              type="submit"
              className="rounded-lg bg-slate-700 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-600 disabled:opacity-50"
              disabled={setProfileTypeMutation.isPending}
            >
              Save type
            </button>
            {setProfileTypeMutation.isSuccess && (
              <span className="text-xs text-emerald-300">Updated</span>
            )}
            {setProfileTypeMutation.error && (
              <span className="text-xs text-rose-300">
                {setProfileTypeMutation.error.message}
              </span>
            )}
          </form>
          <form
            onSubmit={handleProfileSave}
            className="mt-4 grid gap-4 md:grid-cols-2"
          >
            <label className="flex flex-col gap-1 text-sm text-slate-200 md:col-span-2">
              Full Name
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                placeholder="Your legal name"
                required
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-slate-200">
              Headline
              <input
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                placeholder="e.g. Event crew lead, Hospitality ops"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-slate-200">
              Skills (comma separated)
              <input
                value={skillsInput}
                onChange={(e) => setSkillsInput(e.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                placeholder="Customer service, Merchandising, AV"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-slate-200 md:col-span-2">
              Bio
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="min-h-20 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                placeholder="What do you do? What are you looking for?"
              />
            </label>
            <label className="flex items-center gap-3 text-sm text-slate-200">
              <input
                type="checkbox"
                checked={consentTalentPool}
                onChange={(e) => setConsentTalentPool(e.target.checked)}
                className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
              />
              Allow my profile in the talent pool (consent-based exposure)
            </label>
            <div className="flex gap-3 md:col-span-2">
              <button
                type="submit"
                className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50"
                disabled={profileMutation.isPending}
              >
                Save profile
              </button>
              {profileMutation.error && (
                <span className="text-xs text-rose-300">
                  {profileMutation.error.message}
                </span>
              )}
              {profileMutation.isSuccess && (
                <span className="text-xs text-emerald-300">Saved</span>
              )}
            </div>
          </form>
        </section>

        <section className="rounded-2xl bg-slate-900/60 p-6 shadow-lg ring-1 shadow-black/20 ring-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Organizations</h2>
            {orgMutation.isPending && (
              <span className="text-xs text-amber-300">Saving…</span>
            )}
          </div>
          <form onSubmit={handleOrgCreate} className="mt-4 space-y-3">
            <input
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              placeholder="Organization name"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <select
              value={orgType}
              onChange={(e) => setOrgType(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            >
              <option value="COMPANY">Company</option>
              <option value="ORGANIZER">Event Organizer</option>
            </select>
            <input
              value={ssmNumber}
              onChange={(e) => setSsmNumber(e.target.value)}
              placeholder="SSM Number (optional)"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <input
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="Industry (optional)"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50"
              disabled={orgMutation.isPending}
            >
              Add organization
            </button>
          </form>
          <div className="mt-4 space-y-2">
            <p className="text-xs tracking-wide text-slate-500 uppercase">
              Yours
            </p>
            <div className="space-y-2">
              {organizationsQuery.data?.length ? (
                organizationsQuery.data.map((org) => (
                  <div
                    key={org.id}
                    className="rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{org.name}</span>
                      <span className="text-xs text-slate-400">{org.type}</span>
                    </div>
                    {org.ssmNumber && (
                      <p className="text-xs text-slate-500">
                        SSM: {org.ssmNumber}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-400">No organizations yet.</p>
              )}
            </div>
          </div>
        </section>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl bg-slate-900/60 p-6 shadow-lg ring-1 shadow-black/20 ring-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Create Event</h2>
            {eventMutation.isPending && (
              <span className="text-xs text-amber-300">Saving…</span>
            )}
          </div>
          <form onSubmit={handleEventCreate} className="mt-4 space-y-3">
            <select
              value={eventOrgId}
              onChange={(e) => setEventOrgId(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            >
              <option value="">Select organization</option>
              {organizationsQuery.data?.map((org) => (
                <option key={org.id} value={org.id}>
                  {org.name}
                </option>
              ))}
            </select>
            <input
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              placeholder="Event title"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <input
              type="datetime-local"
              value={eventStartsAt}
              onChange={(e) => setEventStartsAt(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <input
              type="datetime-local"
              value={eventEndsAt}
              onChange={(e) => setEventEndsAt(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <input
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              placeholder="Location (optional)"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <textarea
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              placeholder="Description (optional)"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50"
              disabled={eventMutation.isPending}
            >
              Publish event
            </button>
          </form>
          <div className="mt-4 space-y-2">
            <p className="text-xs tracking-wide text-slate-500 uppercase">
              Upcoming
            </p>
            {eventsQuery.data?.length ? (
              <ul className="space-y-2">
                {eventsQuery.data.map((evt) => (
                  <li
                    key={evt.id}
                    className="rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{evt.title}</span>
                      <span className="text-xs text-slate-400">
                        {formatDateTime(evt.startsAt)}
                      </span>
                    </div>
                    {evt.location && (
                      <p className="text-xs text-slate-500">{evt.location}</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-400">No events yet.</p>
            )}
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900/60 p-6 shadow-lg ring-1 shadow-black/20 ring-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Check-ins</h2>
            {(checkInEventMutation.isPending ||
              checkInEmploymentMutation.isPending) && (
              <span className="text-xs text-amber-300">Recording…</span>
            )}
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Self check-ins are marked Unverified until an organizer/company
            verifies them.
          </p>
          <form onSubmit={handleEventCheckIn} className="mt-4 space-y-3">
            <p className="text-sm font-medium text-slate-200">
              Event attendance
            </p>
            <select
              value={eventCheckInId}
              onChange={(e) => setEventCheckInId(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            >
              <option value="">Select event</option>
              {eventsQuery.data?.map((evt) => (
                <option key={evt.id} value={evt.id}>
                  {evt.title} ({formatDate(evt.startsAt)})
                </option>
              ))}
            </select>
            <input
              value={eventCheckInNote}
              onChange={(e) => setEventCheckInNote(e.target.value)}
              placeholder="Note (optional)"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50"
              disabled={checkInEventMutation.isPending}
            >
              Record event check-in
            </button>
          </form>

          <form onSubmit={handleEmploymentCheckIn} className="mt-6 space-y-3">
            <p className="text-sm font-medium text-slate-200">Employment</p>
            <select
              value={employmentOrgId}
              onChange={(e) => setEmploymentOrgId(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            >
              <option value="">Select organization</option>
              {organizationsQuery.data?.map((org) => (
                <option key={org.id} value={org.id}>
                  {org.name}
                </option>
              ))}
            </select>
            <input
              value={employmentTitle}
              onChange={(e) => setEmploymentTitle(e.target.value)}
              placeholder="Role title"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <input
              type="datetime-local"
              value={employmentStart}
              onChange={(e) => setEmploymentStart(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <input
              value={employmentNote}
              onChange={(e) => setEmploymentNote(e.target.value)}
              placeholder="Note (optional)"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50"
              disabled={checkInEmploymentMutation.isPending}
            >
              Record employment
            </button>
          </form>

          <div className="mt-8 border-t border-slate-800 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">
                Admin check-in (Organizer)
              </h3>
              {adminEventCheckInMutation.isPending && (
                <span className="text-xs text-amber-300">Recording…</span>
              )}
            </div>
            <form onSubmit={handleAdminEventCheckIn} className="mt-3 space-y-3">
              <select
                value={adminEventId}
                onChange={(e) => setAdminEventId(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              >
                <option value="">Select event</option>
                {eventsQuery.data?.map((evt) => (
                  <option key={evt.id} value={evt.id}>
                    {evt.title} ({formatDate(evt.startsAt)})
                  </option>
                ))}
              </select>
              <input
                value={adminEventUserId}
                onChange={(e) => setAdminEventUserId(e.target.value)}
                placeholder="User ID"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
              <input
                value={adminEventNote}
                onChange={(e) => setAdminEventNote(e.target.value)}
                placeholder="Note (optional)"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-sky-400 disabled:opacity-50"
                disabled={adminEventCheckInMutation.isPending}
              >
                Verify attendee
              </button>
            </form>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">
                Admin employment (Company)
              </h3>
              {adminEmploymentCheckInMutation.isPending && (
                <span className="text-xs text-amber-300">Recording…</span>
              )}
            </div>
            <form
              onSubmit={handleAdminEmploymentCheckIn}
              className="mt-3 space-y-3"
            >
              <select
                value={adminEmploymentOrgId}
                onChange={(e) => setAdminEmploymentOrgId(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              >
                <option value="">Select company</option>
                {organizationsQuery.data
                  ?.filter((org) => org.type === "COMPANY")
                  .map((org) => (
                    <option key={org.id} value={org.id}>
                      {org.name}
                    </option>
                  ))}
              </select>
              <input
                value={adminEmploymentUserId}
                onChange={(e) => setAdminEmploymentUserId(e.target.value)}
                placeholder="User ID"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
              <input
                value={adminEmploymentTitle}
                onChange={(e) => setAdminEmploymentTitle(e.target.value)}
                placeholder="Role title"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  type="datetime-local"
                  value={adminEmploymentStart}
                  onChange={(e) => setAdminEmploymentStart(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                />
                <input
                  type="datetime-local"
                  value={adminEmploymentEnd}
                  onChange={(e) => setAdminEmploymentEnd(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                />
              </div>
              <label className="flex items-center gap-2 text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={adminEmploymentIsCurrent}
                  onChange={(e) =>
                    setAdminEmploymentIsCurrent(e.target.checked)
                  }
                  className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                />
                Currently employed
              </label>
              <input
                value={adminEmploymentNote}
                onChange={(e) => setAdminEmploymentNote(e.target.value)}
                placeholder="Note (optional)"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-sky-400 disabled:opacity-50"
                disabled={adminEmploymentCheckInMutation.isPending}
              >
                Verify employment
              </button>
            </form>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">
                Issue Certificate
              </h3>
              {issueCertificateMutation.isPending && (
                <span className="text-xs text-amber-300">Issuing…</span>
              )}
            </div>
            <form onSubmit={handleIssueCertificate} className="mt-3 space-y-3">
              <select
                value={certOrgId}
                onChange={(e) => setCertOrgId(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              >
                <option value="">Select organization</option>
                {organizationsQuery.data?.map((org) => (
                  <option key={org.id} value={org.id}>
                    {org.name}
                  </option>
                ))}
              </select>
              <input
                value={certUserId}
                onChange={(e) => setCertUserId(e.target.value)}
                placeholder="User ID"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
              <select
                value={certType}
                onChange={(e) => setCertType(e.target.value as any)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              >
                <option value="ACHIEVEMENT">Achievement</option>
                <option value="ATTENDANCE">Attendance</option>
                <option value="CERTIFICATION">Certification</option>
                <option value="EMPLOYMENT">Employment</option>
              </select>
              <input
                value={certTitle}
                onChange={(e) => setCertTitle(e.target.value)}
                placeholder="Certificate Title"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
              <textarea
                value={certDescription}
                onChange={(e) => setCertDescription(e.target.value)}
                placeholder="Description (optional)"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-400 disabled:opacity-50"
                disabled={issueCertificateMutation.isPending}
              >
                Issue Certificate
              </button>
            </form>
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-xs tracking-wide text-slate-500 uppercase">
              Recent check-ins
            </p>
            {checkIns?.length ? (
              <ul className="space-y-2">
                {checkIns.slice(0, 5).map((ci) => (
                  <li
                    key={ci.id}
                    className="rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        {ci.type === "EVENT"
                          ? (ci.event?.title ?? "Event")
                          : "Employment"}
                      </span>
                      <span className="text-xs text-slate-400">
                        {formatDateTime(ci.createdAt)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      {ci.organization?.name ?? ""}
                      {ci.note ? ` · ${ci.note}` : ""}
                    </p>
                    <div className="text-[11px] text-slate-400">
                      Status: {ci.verificationStatus}
                      {ci.addedBy?.name
                        ? ` · Verified by ${ci.addedBy.name}`
                        : ""}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-400">No check-ins yet.</p>
            )}
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900/60 p-6 shadow-lg ring-1 shadow-black/20 ring-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Job Posting</h2>
            {jobMutation.isPending && (
              <span className="text-xs text-amber-300">Saving…</span>
            )}
          </div>
          <form onSubmit={handleJobCreate} className="mt-4 space-y-3">
            <select
              value={jobOrgId}
              onChange={(e) => setJobOrgId(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            >
              <option value="">Select organization</option>
              {organizationsQuery.data?.map((org) => (
                <option key={org.id} value={org.id}>
                  {org.name}
                </option>
              ))}
            </select>
            <input
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Job title"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Short description"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <input
              value={jobSkillsInput}
              onChange={(e) => setJobSkillsInput(e.target.value)}
              placeholder="Required skills (comma separated)"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 disabled:opacity-50"
              disabled={jobMutation.isPending}
            >
              Publish job
            </button>
          </form>

          <div className="mt-4 space-y-2">
            <p className="text-xs tracking-wide text-slate-500 uppercase">
              Recommended jobs for you
            </p>
            {jobMatches?.length ? (
              <ul className="space-y-2">
                {jobMatches
                  .slice(0, 5)
                  .map(({ job, overlap, missing, score }) => (
                    <li
                      key={job.id}
                      className="rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-200"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{job.title}</span>
                        <span className="text-xs font-bold text-emerald-400">
                          {score}% Match
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">
                          {job.organization.name}
                        </span>
                      </div>
                      <p className="line-clamp-2 text-xs text-slate-400">
                        {job.description}
                      </p>
                      <p className="text-xs text-emerald-300">
                        Match on: {overlap.join(", ") || "N/A"}
                      </p>
                      {missing.length > 0 && (
                        <p className="text-xs text-slate-500">
                          Missing: {missing.join(", ")}
                        </p>
                      )}
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-400">
                No matches yet. Add skills to your profile.
              </p>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-xs tracking-wide text-slate-500 uppercase">
              Upcoming events for you
            </p>
            {eventMatches?.length ? (
              <ul className="space-y-2">
                {eventMatches.slice(0, 5).map(({ event, score }) => (
                  <li
                    key={event.id}
                    className="rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{event.title}</span>
                      <span className="text-xs text-slate-400">
                        {formatDateTime(event.startsAt)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      {event.location ?? "TBA"}
                    </p>
                    {score > 0 && (
                      <p className="text-xs text-emerald-300">
                        Match score: {score}%
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-400">No upcoming events yet.</p>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-xs tracking-wide text-slate-500 uppercase">
              Career Insights
            </p>
            {careerInsightsQuery.data ? (
              <div className="space-y-4">
                {careerInsightsQuery.data.recommendedSkills.length > 0 && (
                  <div className="rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-2">
                    <p className="mb-2 text-xs font-medium text-slate-300">
                      Top skills to learn next
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {careerInsightsQuery.data.recommendedSkills.map(
                        ({ skill }) => (
                          <span
                            key={skill}
                            className="rounded-full bg-indigo-500/20 px-2 py-1 text-xs text-indigo-300"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {careerInsightsQuery.data.potentialRoles.length > 0 && (
                  <div className="rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-2">
                    <p className="mb-2 text-xs font-medium text-slate-300">
                      Potential next roles
                    </p>
                    <ul className="space-y-1">
                      {careerInsightsQuery.data.potentialRoles.map(
                        ({ role }) => (
                          <li
                            key={role}
                            className="flex items-center gap-2 text-xs text-slate-400"
                          >
                            <span className="h-1 w-1 rounded-full bg-emerald-500" />
                            {role}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}

                {careerInsightsQuery.data.recommendedSkills.length === 0 &&
                  careerInsightsQuery.data.potentialRoles.length === 0 && (
                    <p className="text-sm text-slate-400">
                      Add more skills to see career insights.
                    </p>
                  )}
              </div>
            ) : (
              <p className="text-sm text-slate-400">Loading insights...</p>
            )}
          </div>
        </section>
      </div>

      <section className="rounded-2xl bg-slate-900/60 p-6 shadow-lg ring-1 shadow-black/20 ring-slate-800">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Timeline</h2>
          <p className="text-xs text-slate-400">Verified from check-ins</p>
        </div>
        {experiences?.length ? (
          <ul className="mt-4 space-y-3">
            {experiences.map((exp) => (
              <li
                key={exp.id}
                className="rounded-lg border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm text-slate-200"
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium">{exp.title}</div>
                  <span className="text-xs text-emerald-300">
                    {exp.verificationStatus}
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  {exp.organization?.name ?? ""}
                  {exp.event?.title ? ` · ${exp.event.title}` : ""}
                </div>
                <div className="text-xs text-slate-500">
                  {formatDate(exp.startDate)}
                  {exp.endDate
                    ? ` → ${formatDate(exp.endDate)}`
                    : exp.isCurrent
                      ? " · Ongoing"
                      : ""}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-slate-400">
            No experiences recorded yet.
          </p>
        )}
      </section>

      <section className="rounded-2xl bg-slate-900/60 p-6 shadow-lg ring-1 shadow-black/20 ring-slate-800">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Certificates</h2>
          <p className="text-xs text-slate-400">Verified Credentials</p>
        </div>
        {certificatesQuery.data?.length ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificatesQuery.data.map((cert) => (
              <div
                key={cert.id}
                className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-950 p-4"
              >
                <div className="absolute top-0 right-0 h-16 w-16 translate-x-8 -translate-y-8 rotate-45 bg-emerald-500/10" />
                <div className="relative">
                  <div className="mb-2 flex items-start justify-between">
                    <span className="inline-block rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold tracking-wider text-emerald-300 uppercase">
                      {cert.type}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {formatDate(cert.issueDate)}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-amber-100">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Issued by {cert.organization?.name}
                  </p>
                  {cert.event && (
                    <p className="text-xs text-slate-500">
                      Event: {cert.event.title}
                    </p>
                  )}
                  <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3">
                    <span className="font-mono text-[10px] text-slate-600">
                      ID: {cert.id.slice(-8)}
                    </span>
                    <button
                      onClick={() =>
                        window.open(`/verify/${cert.hash}`, "_blank")
                      }
                      className="text-xs font-medium text-sky-400 hover:text-sky-300"
                    >
                      Verify Credential →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-slate-400">
            No certificates earned yet.
          </p>
        )}
      </section>
    </div>
  );
}
