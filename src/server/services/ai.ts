// Simple AI service for skill extraction and matching
// In a real app, this would call OpenAI or a local LLM

const COMMON_SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "SQL",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
  "Project Management",
  "Communication",
  "Leadership",
  "Marketing",
  "Sales",
  "Accounting",
  "Finance",
  "HR",
  "Recruiting",
  "Design",
  "UI/UX",
  "Event Planning",
  "Public Speaking",
  "Data Analysis",
  "Machine Learning",
  "Customer Service",
  "Operations",
  "Logistics",
  "Supply Chain",
];

export const aiService = {
  // Extract skills from text (title + description)
  extractSkills: async (text: string): Promise<string[]> => {
    // Simple keyword matching for now
    // In Phase 3 full implementation, this would call an LLM
    const lowerText = text.toLowerCase();
    return COMMON_SKILLS.filter((skill) =>
      lowerText.includes(skill.toLowerCase()),
    );
  },

  // Calculate match score between user skills and job/event skills
  // Returns a score between 0 and 100
  calculateMatchScore: (
    userSkills: string[],
    targetSkills: string[],
  ): number => {
    if (!userSkills.length || !targetSkills.length) return 0;

    const userSet = new Set(userSkills.map((s) => s.toLowerCase()));
    const targetSet = new Set(targetSkills.map((s) => s.toLowerCase()));

    let matches = 0;
    for (const skill of targetSet) {
      if (userSet.has(skill)) {
        matches++;
      }
    }

    // Coverage score: How many of the target requirements does the user have?
    return Math.round((matches / targetSet.size) * 100);
  },
};
