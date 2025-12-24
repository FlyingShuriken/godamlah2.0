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
  Award,
  TrendingUp,
  Lightbulb,
  Briefcase,
  MapPin,
  Building2,
  QrCode,
  Loader2,
} from "lucide-react";
import { QrReader } from "react-qr-reader";
import { api } from "@/trpc/react";

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
import { cn } from "@/lib/utils";

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
  const certificatesQuery = api.certificate.getMine.useQuery();
  const careerInsightsQuery = api.matching.careerInsights.useQuery();

  const utils = api.useUtils();

  const profileMutation = api.profile.upsert.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.profile.getMine.invalidate(),
        utils.profile.timeline.invalidate(),
      ]);
      setIsEditing(false);
    },
  });

  const checkInEventMutation = api.checkIn.checkInToEvent.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.checkIn.myCheckIns.invalidate(),
        utils.profile.timeline.invalidate(),
      ]);
      setEventCheckInId("");
      setEventCheckInNote("");
    },
  });

  const checkInEmploymentMutation = api.checkIn.checkInEmployment.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.checkIn.myCheckIns.invalidate(),
        utils.profile.timeline.invalidate(),
      ]);
      setEmploymentOrgId("");
      setEmploymentTitle("");
      setEmploymentStart("");
      setEmploymentNote("");
    },
  });

  // Local state for profile editing
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
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
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);

  // Load data into form
  useEffect(() => {
    if (profileQuery.data) {
      setFormData({
        fullName: profileQuery.data.fullName || "",
        headline: profileQuery.data.headline || "",
        bio: profileQuery.data.bio || "",
        skills: profileQuery.data.skills?.join(", ") || "",
        consentTalentPool: profileQuery.data.consentTalentPool ?? true,
      });
    }
  }, [profileQuery.data]);

  const handleScanResult = (result?: unknown, _error?: unknown) => {
    if (result) {
      // @ts-expect-error - react-qr-reader types are loose
      const text = result?.text;
      if (text) {
        // Simple heuristic: if it looks like a UUID, it might be an event ID
        // In a real app, we'd have a better format like "event:UUID"
        setEventCheckInId(text);
        setIsScanModalOpen(false);
      }
    }
  };

  // --- Render Functions ---

  const renderHome = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Welcome back, {profileQuery.data?.fullName?.split(" ")[0] ?? "User"}
          </h2>
          <p className="text-muted-foreground">
            Here's what's happening in your career journey.
          </p>
        </div>
        <Button onClick={() => setIsScanModalOpen(true)} className="gap-2">
          <QrCode size={16} />
          Scan Check-in
        </Button>
      </div>

      {/* Stats / Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Profile Strength
            </CardTitle>
            <TrendingUp className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {profileQuery.data?.skills?.length ? "Good" : "Needs Work"}
            </div>
            <p className="text-muted-foreground text-xs">
              {profileQuery.data?.skills?.length ?? 0} skills verified
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Matches</CardTitle>
            <Briefcase className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {jobMatchesQuery.data?.length ?? 0}
            </div>
            <p className="text-muted-foreground text-xs">
              Based on your profile
            </p>
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
              {eventMatchesQuery.data?.length ?? 0}
            </div>
            <p className="text-muted-foreground text-xs">Recommended for you</p>
          </CardContent>
        </Card>
      </div>

      {/* Timeline Feed */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Your Journey</h3>
        {timelineQuery.isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
          </div>
        ) : timelineQuery.data?.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-8 text-center">
              <Clock className="text-muted-foreground/50 mb-4 h-12 w-12" />
              <h3 className="text-lg font-medium">No activity yet</h3>
              <p className="text-muted-foreground text-sm">
                Your career milestones will appear here.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="before:bg-border relative space-y-8 pl-8 before:absolute before:top-2 before:left-3.5 before:h-full before:w-0.5">
            {timelineQuery.data?.map((item) => (
              <div key={item.id} className="relative">
                <div className="bg-background absolute -left-[34px] flex h-7 w-7 items-center justify-center rounded-full border shadow-sm">
                  {item.type === "JOB" && <Briefcase size={14} />}
                  {item.type === "EVENT" && <Calendar size={14} />}
                  {item.type === "CERTIFICATE" && <Award size={14} />}
                </div>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{item.title}</CardTitle>
                      <span className="text-muted-foreground text-xs">
                        {formatDateStr(item.date)}
                      </span>
                    </div>
                    <CardDescription>{item.subtitle}</CardDescription>
                  </CardHeader>
                  {item.description && (
                    <CardContent className="pb-4 text-sm">
                      {item.description}
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderJobs = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Recommended Jobs</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobMatchesQuery.isLoading ? (
          <p>Loading jobs...</p>
        ) : jobMatchesQuery.data?.length === 0 ? (
          <p className="text-muted-foreground col-span-full text-center">
            No job matches found yet. Try updating your skills!
          </p>
        ) : (
          jobMatchesQuery.data?.map((job) => (
            <Card key={job.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="line-clamp-1 text-lg">
                  {job.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Building2 size={12} />
                  {job.organization.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-4 flex flex-wrap gap-2">
                  {job.location && (
                    <Badge variant="secondary" className="gap-1">
                      <MapPin size={10} /> {job.location}
                    </Badge>
                  )}
                  <Badge variant="secondary" className="gap-1">
                    <Briefcase size={10} /> {job.type}
                  </Badge>
                </div>
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  {job.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Upcoming Events</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {eventMatchesQuery.isLoading ? (
          <p>Loading events...</p>
        ) : eventMatchesQuery.data?.length === 0 ? (
          <p className="text-muted-foreground col-span-full text-center">
            No upcoming events found.
          </p>
        ) : (
          eventMatchesQuery.data?.map((event) => (
            <Card key={event.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="line-clamp-1 text-lg">
                  {event.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Calendar size={12} />
                  {formatDateStr(event.date)}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="gap-1">
                    <MapPin size={10} /> {event.location}
                  </Badge>
                </div>
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  {event.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register</Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );

  const renderCheckins = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Check-ins</h2>
        <Button onClick={() => setIsScanModalOpen(true)} className="gap-2">
          <QrCode size={16} />
          Scan QR
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Manual Event Check-in */}
        <Card>
          <CardHeader>
            <CardTitle>Event Check-in</CardTitle>
            <CardDescription>
              Enter an event ID if you can't scan the QR code.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="eventId">Event ID</Label>
              <Input
                id="eventId"
                placeholder="Enter Event ID"
                value={eventCheckInId}
                onChange={(e) => setEventCheckInId(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="eventNote">Note (Optional)</Label>
              <Textarea
                id="eventNote"
                placeholder="What did you learn?"
                value={eventCheckInNote}
                onChange={(e) => setEventCheckInNote(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() =>
                checkInEventMutation.mutate({
                  eventId: eventCheckInId,
                  note: eventCheckInNote,
                })
              }
              disabled={!eventCheckInId || checkInEventMutation.isPending}
              className="w-full"
            >
              {checkInEventMutation.isPending ? "Checking in..." : "Check In"}
            </Button>
          </CardFooter>
        </Card>

        {/* Employment Check-in */}
        <Card>
          <CardHeader>
            <CardTitle>Employment Check-in</CardTitle>
            <CardDescription>
              Self-declare your current employment.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orgId">Organization ID</Label>
              <Input
                id="orgId"
                placeholder="Enter Organization ID"
                value={employmentOrgId}
                onChange={(e) => setEmploymentOrgId(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                placeholder="e.g. Software Engineer"
                value={employmentTitle}
                onChange={(e) => setEmploymentTitle(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={employmentStart}
                onChange={(e) => setEmploymentStart(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() =>
                checkInEmploymentMutation.mutate({
                  organizationId: employmentOrgId,
                  title: employmentTitle,
                  startDate: new Date(employmentStart),
                  note: employmentNote,
                })
              }
              disabled={
                !employmentOrgId ||
                !employmentTitle ||
                !employmentStart ||
                checkInEmploymentMutation.isPending
              }
              className="w-full"
            >
              {checkInEmploymentMutation.isPending
                ? "Submitting..."
                : "Submit Declaration"}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Recent Check-ins List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Recent Check-ins</h3>
        {checkInsQuery.isLoading ? (
          <p>Loading check-ins...</p>
        ) : checkInsQuery.data?.length === 0 ? (
          <p className="text-muted-foreground">No check-ins yet.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {checkInsQuery.data?.map((checkIn) => (
              <Card key={checkIn.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    {checkIn.event
                      ? checkIn.event.title
                      : (checkIn.organization?.name ?? "Unknown")}
                  </CardTitle>
                  <CardDescription>
                    {checkIn.type === "EVENT"
                      ? "Event Attendance"
                      : "Employment"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-xs">
                    {formatDateStr(checkIn.createdAt)}
                  </p>
                  {checkIn.verified ? (
                    <Badge
                      variant="default"
                      className="mt-2 bg-emerald-500 hover:bg-emerald-600"
                    >
                      Verified
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="mt-2">
                      Pending Verification
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderCertificates = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">My Certificates</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certificatesQuery.isLoading ? (
          <p>Loading certificates...</p>
        ) : certificatesQuery.data?.length === 0 ? (
          <p className="text-muted-foreground col-span-full text-center">
            No certificates found.
          </p>
        ) : (
          certificatesQuery.data?.map((cert) => (
            <Card key={cert.id}>
              <CardHeader>
                <CardTitle className="text-lg">{cert.name}</CardTitle>
                <CardDescription>{cert.issuingOrg}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Issued: {formatDateStr(cert.issueDate)}
                </p>
                {cert.credentialId && (
                  <p className="text-muted-foreground mt-1 font-mono text-xs">
                    ID: {cert.credentialId}
                  </p>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Credential
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">My Profile</h2>
        <Button onClick={() => setIsEditing(true)} variant="outline">
          <Edit2 className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              {profileQuery.data?.fullName?.charAt(0) ?? "U"}
            </div>
            <div>
              <CardTitle>{profileQuery.data?.fullName}</CardTitle>
              <CardDescription>{profileQuery.data?.headline}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="mb-2 text-sm font-medium">About</h4>
            <p className="text-muted-foreground text-sm">
              {profileQuery.data?.bio || "No bio added yet."}
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-medium">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {profileQuery.data?.skills?.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              )) ?? (
                <p className="text-muted-foreground text-sm">
                  No skills added.
                </p>
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-medium">MyKad ID</h4>
            <p className="text-muted-foreground font-mono text-sm">
              {profileQuery.data?.mykadHash?.substring(0, 10)}...
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Career Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            Career Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          {careerInsightsQuery.isLoading ? (
            <p>Loading insights...</p>
          ) : (
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-950/50">
                <h4 className="font-medium">Recommended Skills</h4>
                <p className="text-muted-foreground mt-1 text-sm">
                  Based on your profile, learning{" "}
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    Project Management
                  </span>{" "}
                  could increase your job matches by 20%.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Profile Dialog */}
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="headline">Headline</Label>
              <Input
                id="headline"
                value={formData.headline}
                onChange={(e) =>
                  setFormData({ ...formData, headline: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="skills">Skills (comma separated)</Label>
              <Input
                id="skills"
                value={formData.skills}
                onChange={(e) =>
                  setFormData({ ...formData, skills: e.target.value })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button
              onClick={() =>
                profileMutation.mutate({
                  fullName: formData.fullName,
                  headline: formData.headline,
                  bio: formData.bio,
                  skills: formData.skills
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean),
                  consentTalentPool: formData.consentTalentPool,
                })
              }
              disabled={profileMutation.isPending}
            >
              {profileMutation.isPending ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );

  // --- Main Render ---

  return (
    <>
      {activeTab === "home" && renderHome()}
      {activeTab === "jobs" && renderJobs()}
      {activeTab === "events" && renderEvents()}
      {activeTab === "checkins" && renderCheckins()}
      {activeTab === "certificates" && renderCertificates()}
      {activeTab === "profile" && renderProfile()}

      {/* QR Scanner Modal */}
      <Dialog open={isScanModalOpen} onOpenChange={setIsScanModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Scan QR Code</DialogTitle>
          </DialogHeader>
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-black">
            <QrReader
              onResult={handleScanResult}
              constraints={{ facingMode: "environment" }}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-muted-foreground text-center text-sm">
            Scan an event or organization QR code to check in.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};
