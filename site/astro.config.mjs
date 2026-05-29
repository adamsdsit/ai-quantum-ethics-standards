import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  output: "static",
  integrations: [
    starlight({
      title: "AI + Quantum Ethics Standards",
      description: "A living, auditable standards corpus for AI and quantum computing.",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/adamsdsit/ai-quantum-ethics-standards" }
      ],
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
        { label: "Foundations", items: [{ autogenerate: { directory: "00_foundations" } }] },
        { label: "Governance", items: [{ autogenerate: { directory: "01_governance" } }] },
        { label: "AI Standards", items: [{ autogenerate: { directory: "02_ai_standards" } }] },
        { label: "Quantum Standards", items: [{ autogenerate: { directory: "03_quantum_standards" } }] },
        { label: "Risk Framework", items: [{ autogenerate: { directory: "04_risk_framework" } }] },
        { label: "Audit & Assurance", items: [{ autogenerate: { directory: "05_audit_and_assurance" } }] },
        { label: "Case Studies", items: [{ autogenerate: { directory: "06_case_studies" } }] },
        { label: "Interpretive Notes", items: [{ autogenerate: { directory: "99_interpretive_notes" } }] },
        { label: "Meta", items: [{ autogenerate: { directory: "meta" } }] }
      ]
    })
  ]
});
