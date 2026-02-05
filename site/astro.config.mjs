import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  output: "static",
  integrations: [
    starlight({
      title: "AI + Quantum Ethics Standards",
      description: "A living, auditable standards corpus for AI and quantum computing.",
      social: {
        github: "https://github.com/adamsdsit/ai-quantum-ethics-standards"
      },
      customCss: ["./src/styles/custom.css"],
      defaultLocale: "en",
      sidebar: [
        {
          label: "Start",
          items: [
            { label: "Overview", link: "/" },
            { label: "Diagrams", link: "/diagrams/" }
          ]
        },
        { label: "Foundations", autogenerate: { directory: "00_foundations" } },
        { label: "Governance", autogenerate: { directory: "01_governance" } },
        { label: "AI Standards", autogenerate: { directory: "02_ai_standards" } },
        { label: "Quantum Standards", autogenerate: { directory: "03_quantum_standards" } },
        { label: "Risk Framework", autogenerate: { directory: "04_risk_framework" } },
        { label: "Audit & Assurance", autogenerate: { directory: "05_audit_and_assurance" } },
        { label: "Case Studies", autogenerate: { directory: "06_case_studies" } },
        { label: "Interpretive Notes", autogenerate: { directory: "99_interpretive_notes" } },
        { label: "Meta", autogenerate: { directory: "meta" } }
      ]
    })
  ]
});
