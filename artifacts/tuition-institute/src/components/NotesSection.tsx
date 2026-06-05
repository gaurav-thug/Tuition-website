import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FileQuestion, ChevronDown, ChevronUp, Search, X } from "lucide-react";

type Chapter = { title: string; notes: string; qbank: string };
type Subject = { name: string; icon: string; chapters: Chapter[] };
type ClassGroup = { label: string; subjects: Subject[] };
type Category = { id: string; label: string; color: string; icon: string; classes: ClassGroup[] };

type SearchResult = {
  chapter: Chapter;
  categoryLabel: string;
  categoryColor: string;
  categoryIcon: string;
  classLabel: string;
  subjectName: string;
  subjectIcon: string;
};

const ch = (title: string): Chapter => ({ title, notes: "#", qbank: "#" });

const NOTES_DATA: Category[] = [
  {
    id: "cbse",
    label: "CBSE",
    color: "#1E40AF",
    icon: "📚",
    classes: [
      {
        label: "Class 9",
        subjects: [
          {
            name: "Mathematics",
            icon: "📐",
            chapters: [
              ch("Number Systems"),
              ch("Polynomials"),
              ch("Coordinate Geometry"),
              ch("Linear Equations in Two Variables"),
              ch("Introduction to Euclid's Geometry"),
              ch("Lines and Angles"),
              ch("Triangles"),
              ch("Quadrilaterals"),
              ch("Circles"),
              ch("Heron's Formula"),
              ch("Surface Areas and Volumes"),
              ch("Statistics"),
              ch("Probability"),
            ],
          },
          {
            name: "Science",
            icon: "🔬",
            chapters: [
              ch("Matter in Our Surroundings"),
              ch("Is Matter Around Us Pure"),
              ch("Atoms and Molecules"),
              ch("Structure of the Atom"),
              ch("The Fundamental Unit of Life"),
              ch("Tissues"),
              ch("Motion"),
              ch("Force and Laws of Motion"),
              ch("Gravitation"),
              ch("Work and Energy"),
              ch("Sound"),
              ch("Why Do We Fall Ill"),
              ch("Natural Resources"),
            ],
          },
        ],
      },
      {
        label: "Class 10",
        subjects: [
          {
            name: "Mathematics",
            icon: "📐",
            chapters: [
              ch("Real Numbers"),
              ch("Polynomials"),
              ch("Pair of Linear Equations in Two Variables"),
              ch("Quadratic Equations"),
              ch("Arithmetic Progressions"),
              ch("Triangles"),
              ch("Coordinate Geometry"),
              ch("Introduction to Trigonometry"),
              ch("Some Applications of Trigonometry"),
              ch("Circles"),
              ch("Areas Related to Circles"),
              ch("Surface Areas and Volumes"),
              ch("Statistics"),
              ch("Probability"),
            ],
          },
          {
            name: "Science",
            icon: "🔬",
            chapters: [
              ch("Chemical Reactions and Equations"),
              ch("Acids, Bases and Salts"),
              ch("Metals and Non-Metals"),
              ch("Carbon and Its Compounds"),
              ch("Periodic Classification of Elements"),
              ch("Life Processes"),
              ch("Control and Coordination"),
              ch("How Do Organisms Reproduce"),
              ch("Heredity and Evolution"),
              ch("Light – Reflection and Refraction"),
              ch("Human Eye and Colourful World"),
              ch("Electricity"),
              ch("Magnetic Effects of Electric Current"),
              ch("Sources of Energy"),
              ch("Our Environment"),
            ],
          },
        ],
      },
      {
        label: "Class 11",
        subjects: [
          {
            name: "Physics",
            icon: "⚛️",
            chapters: [
              ch("Physical World"),
              ch("Units and Measurements"),
              ch("Motion in a Straight Line"),
              ch("Motion in a Plane"),
              ch("Laws of Motion"),
              ch("Work, Energy and Power"),
              ch("System of Particles and Rotational Motion"),
              ch("Gravitation"),
              ch("Mechanical Properties of Solids"),
              ch("Mechanical Properties of Fluids"),
              ch("Thermal Properties of Matter"),
              ch("Thermodynamics"),
              ch("Kinetic Theory"),
              ch("Oscillations"),
              ch("Waves"),
            ],
          },
          {
            name: "Chemistry",
            icon: "🧪",
            chapters: [
              ch("Some Basic Concepts of Chemistry"),
              ch("Structure of Atom"),
              ch("Classification of Elements and Periodicity in Properties"),
              ch("Chemical Bonding and Molecular Structure"),
              ch("States of Matter: Gases and Liquids"),
              ch("Thermodynamics"),
              ch("Equilibrium"),
              ch("Redox Reactions"),
              ch("Hydrogen"),
              ch("The s-Block Elements"),
              ch("The p-Block Elements"),
              ch("Organic Chemistry – Basic Principles and Techniques"),
              ch("Hydrocarbons"),
              ch("Environmental Chemistry"),
            ],
          },
          {
            name: "Mathematics",
            icon: "📐",
            chapters: [
              ch("Sets"),
              ch("Relations and Functions"),
              ch("Trigonometric Functions"),
              ch("Principle of Mathematical Induction"),
              ch("Complex Numbers and Quadratic Equations"),
              ch("Linear Inequalities"),
              ch("Permutations and Combinations"),
              ch("Binomial Theorem"),
              ch("Sequences and Series"),
              ch("Straight Lines"),
              ch("Conic Sections"),
              ch("Introduction to Three Dimensional Geometry"),
              ch("Limits and Derivatives"),
              ch("Statistics"),
              ch("Probability"),
            ],
          },
          {
            name: "Biology",
            icon: "🌿",
            chapters: [
              ch("The Living World"),
              ch("Biological Classification"),
              ch("Plant Kingdom"),
              ch("Animal Kingdom"),
              ch("Morphology of Flowering Plants"),
              ch("Anatomy of Flowering Plants"),
              ch("Structural Organisation in Animals"),
              ch("Cell: The Unit of Life"),
              ch("Biomolecules"),
              ch("Cell Cycle and Cell Division"),
              ch("Transport in Plants"),
              ch("Mineral Nutrition"),
              ch("Photosynthesis in Higher Plants"),
              ch("Respiration in Plants"),
              ch("Plant Growth and Development"),
              ch("Digestion and Absorption"),
              ch("Breathing and Exchange of Gases"),
              ch("Body Fluids and Circulation"),
              ch("Excretory Products and Their Elimination"),
              ch("Locomotion and Movement"),
              ch("Neural Control and Coordination"),
              ch("Chemical Coordination and Integration"),
            ],
          },
        ],
      },
      {
        label: "Class 12",
        subjects: [
          {
            name: "Physics",
            icon: "⚛️",
            chapters: [
              ch("Electric Charges and Fields"),
              ch("Electrostatic Potential and Capacitance"),
              ch("Current Electricity"),
              ch("Moving Charges and Magnetism"),
              ch("Magnetism and Matter"),
              ch("Electromagnetic Induction"),
              ch("Alternating Current"),
              ch("Electromagnetic Waves"),
              ch("Ray Optics and Optical Instruments"),
              ch("Wave Optics"),
              ch("Dual Nature of Radiation and Matter"),
              ch("Atoms"),
              ch("Nuclei"),
              ch("Semiconductor Electronics: Materials, Devices and Simple Circuits"),
            ],
          },
          {
            name: "Chemistry",
            icon: "🧪",
            chapters: [
              ch("The Solid State"),
              ch("Solutions"),
              ch("Electrochemistry"),
              ch("Chemical Kinetics"),
              ch("Surface Chemistry"),
              ch("General Principles and Processes of Isolation of Elements"),
              ch("The p-Block Elements"),
              ch("The d and f Block Elements"),
              ch("Coordination Compounds"),
              ch("Haloalkanes and Haloarenes"),
              ch("Alcohols, Phenols and Ethers"),
              ch("Aldehydes, Ketones and Carboxylic Acids"),
              ch("Amines"),
              ch("Biomolecules"),
              ch("Polymers"),
              ch("Chemistry in Everyday Life"),
            ],
          },
          {
            name: "Mathematics",
            icon: "📐",
            chapters: [
              ch("Relations and Functions"),
              ch("Inverse Trigonometric Functions"),
              ch("Matrices"),
              ch("Determinants"),
              ch("Continuity and Differentiability"),
              ch("Application of Derivatives"),
              ch("Integrals"),
              ch("Application of Integrals"),
              ch("Differential Equations"),
              ch("Vector Algebra"),
              ch("Three Dimensional Geometry"),
              ch("Linear Programming"),
              ch("Probability"),
            ],
          },
          {
            name: "Biology",
            icon: "🌿",
            chapters: [
              ch("Reproduction in Organisms"),
              ch("Sexual Reproduction in Flowering Plants"),
              ch("Human Reproduction"),
              ch("Reproductive Health"),
              ch("Principles of Inheritance and Variation"),
              ch("Molecular Basis of Inheritance"),
              ch("Evolution"),
              ch("Human Health and Disease"),
              ch("Strategies for Enhancement in Food Production"),
              ch("Microbes in Human Welfare"),
              ch("Biotechnology – Principles and Processes"),
              ch("Biotechnology and Its Applications"),
              ch("Organisms and Populations"),
              ch("Ecosystem"),
              ch("Biodiversity and Conservation"),
              ch("Environmental Issues"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "jee",
    label: "JEE",
    color: "#F97316",
    icon: "🎯",
    classes: [
      {
        label: "JEE Mains & Advanced",
        subjects: [
          {
            name: "Physics",
            icon: "⚛️",
            chapters: [
              ch("Kinematics (1D & 2D)"),
              ch("Laws of Motion and Friction"),
              ch("Work, Energy and Power"),
              ch("Rotational Motion and Moment of Inertia"),
              ch("Gravitation"),
              ch("Elasticity and Fluid Mechanics"),
              ch("Simple Harmonic Motion"),
              ch("Waves and Sound"),
              ch("Heat and Thermodynamics"),
              ch("Electrostatics and Capacitors"),
              ch("Current Electricity and Circuits"),
              ch("Magnetic Effects of Current"),
              ch("Electromagnetic Induction and AC"),
              ch("Ray Optics and Optical Instruments"),
              ch("Wave Optics"),
              ch("Modern Physics – Photoelectric Effect"),
              ch("Nuclear Physics and Radioactivity"),
              ch("Semiconductors and Communication"),
            ],
          },
          {
            name: "Chemistry",
            icon: "🧪",
            chapters: [
              ch("Mole Concept and Stoichiometry"),
              ch("Atomic Structure and Periodicity"),
              ch("Chemical Bonding and Molecular Geometry"),
              ch("Gaseous State and Thermodynamics"),
              ch("Chemical and Ionic Equilibrium"),
              ch("Electrochemistry"),
              ch("Chemical Kinetics"),
              ch("Solid State and Solutions"),
              ch("Surface Chemistry"),
              ch("s and p Block Elements"),
              ch("d and f Block and Coordination Compounds"),
              ch("Organic Chemistry Fundamentals"),
              ch("Alkanes, Alkenes and Alkynes"),
              ch("Aromatic Compounds"),
              ch("Halogen Derivatives"),
              ch("Alcohol, Ether and Carbonyl Compounds"),
              ch("Nitrogen Compounds and Amines"),
              ch("Biomolecules and Polymers"),
            ],
          },
          {
            name: "Mathematics",
            icon: "📐",
            chapters: [
              ch("Complex Numbers"),
              ch("Quadratic Equations and Expressions"),
              ch("Sequences, Series and Progressions"),
              ch("Permutations, Combinations and Binomial Theorem"),
              ch("Matrices and Determinants"),
              ch("Functions, Limits, Continuity"),
              ch("Differential Calculus – Derivatives"),
              ch("Application of Derivatives"),
              ch("Integral Calculus – Indefinite"),
              ch("Definite Integrals and Area"),
              ch("Differential Equations"),
              ch("Coordinate Geometry – Straight Lines and Circles"),
              ch("Conic Sections – Parabola, Ellipse, Hyperbola"),
              ch("Vector Algebra"),
              ch("Three Dimensional Geometry"),
              ch("Trigonometry and Inverse Trigonometry"),
              ch("Probability and Statistics"),
              ch("Mathematical Reasoning and Sets"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "neet",
    label: "NEET",
    color: "#10B981",
    icon: "🏥",
    classes: [
      {
        label: "NEET UG",
        subjects: [
          {
            name: "Physics",
            icon: "⚛️",
            chapters: [
              ch("Physical World and Measurement"),
              ch("Kinematics"),
              ch("Laws of Motion"),
              ch("Work, Energy and Power"),
              ch("System of Particles and Rigid Body"),
              ch("Gravitation"),
              ch("Properties of Bulk Matter"),
              ch("Thermodynamics and Kinetic Theory"),
              ch("Oscillations and Waves"),
              ch("Electrostatics"),
              ch("Current Electricity"),
              ch("Magnetic Effects of Current and Magnetism"),
              ch("Electromagnetic Induction and AC Circuits"),
              ch("Electromagnetic Waves"),
              ch("Optics – Ray and Wave"),
              ch("Dual Nature of Matter and Radiation"),
              ch("Atoms and Nuclei"),
              ch("Electronic Devices"),
            ],
          },
          {
            name: "Chemistry",
            icon: "🧪",
            chapters: [
              ch("Basic Concepts and Mole Concept"),
              ch("Structure of Atom"),
              ch("Classification of Elements and Periodicity"),
              ch("Chemical Bonding and Molecular Structure"),
              ch("States of Matter"),
              ch("Thermodynamics"),
              ch("Chemical Equilibrium"),
              ch("Ionic Equilibrium"),
              ch("Redox Reactions and Electrochemistry"),
              ch("Chemical Kinetics"),
              ch("s, p, d and f Block Elements"),
              ch("Coordination Compounds"),
              ch("Organic Chemistry – Basics and IUPAC"),
              ch("Hydrocarbons"),
              ch("Haloalkanes and Haloarenes"),
              ch("Alcohol, Phenol and Ether"),
              ch("Aldehyde, Ketone and Carboxylic Acids"),
              ch("Amines and Diazonium Salts"),
              ch("Biomolecules and Polymers"),
            ],
          },
          {
            name: "Biology",
            icon: "🌿",
            chapters: [
              ch("Diversity in Living World – Classification"),
              ch("Plant Kingdom – Algae to Gymnosperms"),
              ch("Animal Kingdom – Invertebrates to Chordates"),
              ch("Morphology of Flowering Plants"),
              ch("Anatomy and Structural Organisation"),
              ch("Cell Biology – Structure and Functions"),
              ch("Biomolecules – Enzymes and Macromolecules"),
              ch("Cell Cycle and Division"),
              ch("Transport in Plants"),
              ch("Mineral Nutrition"),
              ch("Photosynthesis and Respiration in Plants"),
              ch("Plant Growth, Hormones and Development"),
              ch("Digestion and Absorption"),
              ch("Breathing, Gas Exchange and Respiration"),
              ch("Body Fluids and Circulation"),
              ch("Excretion in Organisms"),
              ch("Locomotion and Muscle"),
              ch("Neural Control and Nervous System"),
              ch("Chemical Coordination and Endocrine System"),
              ch("Reproduction in Plants"),
              ch("Human Reproduction and Reproductive Health"),
              ch("Principles of Inheritance and Variation"),
              ch("Molecular Basis of Inheritance"),
              ch("Evolution and Natural Selection"),
              ch("Human Health and Disease"),
              ch("Strategies in Food Production and Biotechnology"),
              ch("Ecology – Organisms, Populations and Ecosystems"),
              ch("Biodiversity, Conservation and Environmental Issues"),
            ],
          },
        ],
      },
    ],
  },
];

function SubjectView({ subject, accentColor }: { subject: Subject; accentColor: string }) {
  const [expanded, setExpanded] = useState(false);
  const visibleChapters = expanded ? subject.chapters : subject.chapters.slice(0, 6);

  return (
    <div className="bg-[#F8FAFF] rounded-2xl overflow-hidden border border-gray-100">
      {/* Subject Header */}
      <div
        className="flex items-center gap-3 px-5 py-4 border-b border-gray-100"
        style={{ background: `linear-gradient(135deg, ${accentColor}08, ${accentColor}03)` }}
      >
        <span className="text-2xl">{subject.icon}</span>
        <div>
          <h4 className="font-bold text-[#0F1C3F] text-base">{subject.name}</h4>
          <p className="text-xs text-gray-400 font-medium">{subject.chapters.length} Chapters</p>
        </div>
      </div>

      {/* Chapters List */}
      <div className="divide-y divide-gray-50">
        {visibleChapters.map((chapter, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-5 py-3 hover:bg-white transition-colors group"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span
                className="text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white"
                style={{ backgroundColor: accentColor }}
              >
                {idx + 1}
              </span>
              <span className="text-sm font-medium text-[#1E293B] truncate group-hover:text-[#0F1C3F] transition-colors">
                {chapter.title}
              </span>
            </div>
            <div className="flex items-center gap-2 ml-3 shrink-0">
              <a
                href={chapter.notes}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all hover:text-white"
                style={{
                  borderColor: accentColor,
                  color: accentColor,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = accentColor;
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = accentColor;
                }}
                data-testid={`notes-btn-${subject.name}-${idx}`}
              >
                <BookOpen size={12} />
                Notes
              </a>
              <a
                href={chapter.qbank}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200 transition-colors"
                data-testid={`qbank-btn-${subject.name}-${idx}`}
              >
                <FileQuestion size={12} />
                Q&nbsp;Bank
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      {subject.chapters.length > 6 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold border-t border-gray-100 hover:bg-white transition-colors"
          style={{ color: accentColor }}
        >
          {expanded ? (
            <><ChevronUp size={16} /> Show Less</>
          ) : (
            <><ChevronDown size={16} /> +{subject.chapters.length - 6} More Chapters</>
          )}
        </button>
      )}
    </div>
  );
}

function ClassPanel({ classGroup, accentColor }: { classGroup: ClassGroup; accentColor: string }) {
  const [activeSubject, setActiveSubject] = useState(0);
  const subject = classGroup.subjects[activeSubject];

  return (
    <div>
      {/* Subject Tabs */}
      {classGroup.subjects.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {classGroup.subjects.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveSubject(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border"
              style={{
                backgroundColor: activeSubject === i ? accentColor : "transparent",
                color: activeSubject === i ? "#fff" : "#64748B",
                borderColor: activeSubject === i ? accentColor : "#E2E8F0",
              }}
              data-testid={`subject-tab-${s.name}`}
            >
              <span className="text-base leading-none">{s.icon}</span>
              {s.name}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSubject}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <SubjectView subject={subject} accentColor={accentColor} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ClassAccordion({ category }: { category: Category }) {
  const [openClass, setOpenClass] = useState<string>(category.classes[0].label);

  return (
    <div className="space-y-3">
      {category.classes.map((cls) => {
        const isOpen = openClass === cls.label;
        return (
          <div
            key={cls.label}
            className="rounded-2xl border overflow-hidden transition-all"
            style={{ borderColor: isOpen ? category.color + "40" : "#E2E8F0" }}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
              style={{
                background: isOpen
                  ? `linear-gradient(135deg, ${category.color}10, ${category.color}05)`
                  : "#fff",
              }}
              onClick={() => setOpenClass(isOpen ? "" : cls.label)}
              data-testid={`class-accordion-${cls.label}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: category.color }}
                >
                  {cls.label.includes("JEE")
                    ? "J"
                    : cls.label.includes("NEET")
                    ? "N"
                    : cls.label.replace("Class ", "")}
                </span>
                <div>
                  <span className="text-base font-bold text-[#0F1C3F]">{cls.label}</span>
                  <span className="text-xs text-gray-400 ml-2">
                    {cls.subjects.length} Subject{cls.subjects.length > 1 ? "s" : ""}
                    {" · "}
                    {cls.subjects.reduce((a, s) => a + s.chapters.length, 0)} Chapters
                  </span>
                </div>
              </div>
              <span
                className="text-xl font-light transition-transform duration-300"
                style={{
                  color: category.color,
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 bg-white">
                    <ClassPanel classGroup={cls} accentColor={category.color} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function SearchResultsView({ results, query }: { results: SearchResult[]; query: string }) {
  if (results.length === 0) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-12 text-center">
        <div className="text-5xl mb-4">🔍</div>
        <p className="text-[#0F1C3F] font-bold text-lg mb-2">No chapters found for "{query}"</p>
        <p className="text-gray-400 text-sm">Try a different keyword like "Trigonometry", "Gravitation", or "Cell Division".</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-sm text-gray-400 font-medium mb-4 px-1">
        {results.length} chapter{results.length !== 1 ? "s" : ""} found
      </p>
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
        {results.map((r, idx) => (
          <motion.div
            key={`${r.categoryLabel}-${r.classLabel}-${r.subjectName}-${idx}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: idx * 0.03 }}
            className="flex items-center justify-between px-6 py-4 hover:bg-[#F8FAFF] transition-colors group"
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <span className="text-xl shrink-0">{r.subjectIcon}</span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#0F1C3F] truncate">{r.chapter.title}</p>
                <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-white text-[10px] font-bold"
                    style={{ backgroundColor: r.categoryColor }}
                  >
                    {r.categoryIcon} {r.categoryLabel}
                  </span>
                  <span className="text-gray-300">›</span>
                  <span>{r.classLabel}</span>
                  <span className="text-gray-300">›</span>
                  <span>{r.subjectName}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-4 shrink-0">
              <a
                href={r.chapter.notes}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all"
                style={{ borderColor: r.categoryColor, color: r.categoryColor }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = r.categoryColor;
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = r.categoryColor;
                }}
              >
                <BookOpen size={12} />
                Notes
              </a>
              <a
                href={r.chapter.qbank}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200 transition-colors"
              >
                <FileQuestion size={12} />
                Q&nbsp;Bank
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function NotesSection() {
  const [activeTab, setActiveTab] = useState<string>(NOTES_DATA[0].id);
  const [search, setSearch] = useState("");
  const activeCategory = NOTES_DATA.find((c) => c.id === activeTab) || NOTES_DATA[0];

  const totalChapters = NOTES_DATA.reduce(
    (a, cat) =>
      a +
      cat.classes.reduce(
        (b, cls) => b + cls.subjects.reduce((c, s) => c + s.chapters.length, 0),
        0
      ),
    0
  );

  const searchResults = useMemo<SearchResult[]>(() => {
    const q = search.trim().toLowerCase();
    if (!q) return [];
    const results: SearchResult[] = [];
    for (const cat of NOTES_DATA) {
      for (const cls of cat.classes) {
        for (const subj of cls.subjects) {
          for (const chapter of subj.chapters) {
            if (chapter.title.toLowerCase().includes(q)) {
              results.push({
                chapter,
                categoryLabel: cat.label,
                categoryColor: cat.color,
                categoryIcon: cat.icon,
                classLabel: cls.label,
                subjectName: subj.name,
                subjectIcon: subj.icon,
              });
            }
          }
        }
      }
    }
    return results;
  }, [search]);

  const isSearching = search.trim().length > 0;

  return (
    <section id="notes" className="py-24 bg-[#F8FAFF]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <span className="text-[#F97316] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block">
            STUDY MATERIALS
          </span>
          <h2 className="font-serif text-[#0F1C3F] text-4xl md:text-5xl font-bold mb-4">
            Chapter-wise Notes & Question Banks
          </h2>
          <p className="text-gray-500 text-lg">
            Real CBSE, JEE, and NEET chapter-wise materials. Download notes and practice questions for every chapter.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={`Search any chapter… e.g. "Trigonometry", "Gravitation", "Cell Division"`}
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl border-2 border-gray-200 bg-white text-sm text-[#0F1C3F] placeholder-gray-400 outline-none transition-all focus:border-[#1E40AF] focus:shadow-[0_0_0_4px_#1E40AF18]"
            />
            {isSearching && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Stats strip — hide when searching */}
        {!isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              { val: `${totalChapters}+`, label: "Chapters Covered" },
              { val: "CBSE, JEE, NEET", label: "All Major Exams" },
              { val: "Free", label: "Notes & Q-Banks" },
              { val: "PDF", label: "Easy Downloads" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-gray-100 shadow-sm">
                <span className="font-bold text-[#1E40AF] text-sm">{stat.val}</span>
                <span className="text-gray-400 text-sm">·</span>
                <span className="text-gray-500 text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Search Results OR normal tabs+accordion */}
        <AnimatePresence mode="wait">
          {isSearching ? (
            <motion.div
              key="search-results"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SearchResultsView results={searchResults} query={search.trim()} />
            </motion.div>
          ) : (
            <motion.div
              key="browse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {NOTES_DATA.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-base transition-all duration-200"
                    style={{
                      backgroundColor: activeTab === cat.id ? cat.color : "#ffffff",
                      color: activeTab === cat.id ? "#ffffff" : "#64748B",
                      border: `2px solid ${activeTab === cat.id ? cat.color : "#E2E8F0"}`,
                      boxShadow:
                        activeTab === cat.id ? `0 8px 24px -4px ${cat.color}40` : "none",
                    }}
                    data-testid={`category-tab-${cat.id}`}
                  >
                    <span className="text-xl leading-none">{cat.icon}</span>
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Content Card */}
              <div className="max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8"
                  >
                    {/* Category badge */}
                    <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
                      <span className="text-3xl">{activeCategory.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-[#0F1C3F]">{activeCategory.label} Study Materials</h3>
                        <p className="text-sm text-gray-400">
                          {activeCategory.classes.reduce((a, c) => a + c.subjects.reduce((b, s) => b + s.chapters.length, 0), 0)} chapters across{" "}
                          {activeCategory.classes.reduce((a, c) => a + c.subjects.length, 0)} subjects
                        </p>
                      </div>
                    </div>

                    <ClassAccordion category={activeCategory} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom note */}
        {!isSearching && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center text-gray-400 text-sm"
          >
            💡 PDF links are updated regularly. All downloads are free for enrolled students.
            <span className="mx-2">·</span>
            <a href="#contact" className="text-[#1E40AF] font-semibold hover:underline">
              Enroll to get notified when new chapters are added →
            </a>
          </motion.p>
        )}
      </div>
    </section>
  );
}
