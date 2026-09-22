import { r as __toESM } from "../_runtime.mjs";
import { E as isRedirect, g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-DLI8sQVE.mjs";
import { a as Github, i as Instagram, n as Menu, r as Linkedin, t as X } from "../_libs/lucide-react.mjs";
import { a as SiGit, c as SiPython, i as SiCplusplus, n as FaCubes, o as SiGithub, r as FaDiagramProject, s as SiOpenjdk, t as FaBug } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DDWYveWz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var profile_placeholder_default = "/assets/profile-placeholder-bqRvzZwX.jpg";
var coffee_shop_management_default = "/assets/coffee-shop-management-CXwOyq4Q.png";
var atm_management_default = "/assets/atm-management-Darpnty2.png";
var note_taking_app_default = "/assets/note-taking-app-CDH5NgL8.png";
var profile = {
	name: "M Usman",
	brand: "M.Usman",
	role: "Software Developer",
	description: "Motivated Software Engineering student at NUML Lahore with hands-on experience building C++, Python, and Java desktop applications. Skilled in OOP, file handling, and problem-solving, with a proven ability to teach and communicate technical concepts clearly. Seeking an opportunity to apply and grow these skills in a professional software development role.",
	email: "muhammadusmanj62@gmail.com",
	phone: "+92 325 9759526",
	location: "Shera Kot, Lahore, Pakistan",
	image: profile_placeholder_default,
	imageAlt: "Portrait of M Usman",
	cvUrl: "/cv/Muhammad_Usman_CV.pdf"
};
var education = [{
	id: 1,
	title: "BS Software Engineering (Student)",
	institution: "National University of Modern Languages (NUML), Lahore",
	period: "2025 - 2029",
	points: [
		"Object-Oriented Programming",
		"Data Structures & Algorithms",
		"Programming in C++, Python and Java"
	]
}];
var experience = [{
	id: 1,
	title: "Teacher",
	company: "Dar-ul-Hamd Academy, Lahore",
	period: "2025 - Present",
	points: [
		"Teach students from Classes 5-8 across assigned subjects.",
		"Prepare and deliver lessons according to students' learning levels.",
		"Explain concepts clearly and support students with academic difficulties.",
		"Conduct class activities, homework and assessments to monitor progress.",
		"Maintain a positive and disciplined classroom environment."
	]
}, {
	id: 2,
	title: "Cashier",
	company: "Lahore",
	period: "Jan 2024 - Feb 2025",
	points: ["Responsible for handling cash, managing transactions, and providing excellent customer service with accuracy and efficiency."]
}];
var projects = [
	{
		id: 1,
		title: "Coffee Shop Management System",
		technologies: [
			"C++",
			"OOP",
			"File Handling"
		],
		image: coffee_shop_management_default,
		imageAlt: "Preview of the Coffee Shop Management System project",
		description: "A command-line system simulating real-world coffee shop operations with order management, billing, inventory and stock control, employee management and admin controls. Uses file handling for persistent storage with OOP concepts, arrays and menu-driven programming.",
		githubUrl: "https://github.com/usmanjaved11/CoffeeShop_Simulation"
	},
	{
		id: 2,
		title: "ATM Management System",
		technologies: [
			"Python",
			"OOP",
			"File Handling"
		],
		image: atm_management_default,
		imageAlt: "Preview of the ATM Management System project",
		description: "A command-line ATM system with Admin and Customer roles supporting deposit, withdrawal, transfer, balance check, PIN change, transaction receipts and login attempt limits. Applies OOP, file handling, exception handling, input validation and basic authentication.",
		githubUrl: "https://github.com/usmanjaved11/ATM_Simulation"
	},
	{
		id: 3,
		title: "Note Taking Application",
		technologies: [
			"Java",
			"Swing",
			"File I/O"
		],
		image: note_taking_app_default,
		imageAlt: "Preview of the Note Taking Application project",
		description: "A Java Swing desktop app to manage notes locally with create, view, delete, save and load using text file storage. Applies OOP, encapsulation, ArrayList, GUI components, event handling and file I/O with validation and error handling.",
		githubUrl: "https://github.com/usmanjaved11/NoteTaking-App"
	}
];
var skills = [
	{
		name: "C++",
		icon: SiCplusplus,
		color: "#00599C"
	},
	{
		name: "Java",
		icon: SiOpenjdk,
		color: "#E76F00"
	},
	{
		name: "Python",
		icon: SiPython,
		color: "#3776AB"
	},
	{
		name: "Data Structures & Algorithms",
		icon: FaDiagramProject,
		color: "#7C5CBF"
	},
	{
		name: "Object-Oriented Programming",
		icon: FaCubes,
		color: "#5A6BB5"
	},
	{
		name: "Basic Debugging",
		icon: FaBug,
		color: "#C0563E"
	},
	{
		name: "Git",
		icon: SiGit,
		color: "#F05032"
	},
	{
		name: "GitHub",
		icon: SiGithub,
		color: "#181717"
	}
];
var softSkills = [
	"Communication skills",
	"Time management",
	"Teamwork",
	"Critical thinking",
	"Problem solving"
];
var languages = [
	"Urdu",
	"English",
	"Punjabi"
];
var hobbies = [
	"Traveling",
	"Cooking",
	"Cycling"
];
var socialLinks = [
	{
		name: "GitHub",
		url: "https://github.com/usmanjaved11"
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/muhammad-usman-javed-5610b5388"
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/ch_usman_1100"
	}
];
var navLinks = [
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Experience",
		href: "#experience"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Skills",
		href: "#skills"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Main",
			className: "section-shell flex h-[72px] items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#about",
					className: "font-display text-xl font-bold tracking-tight",
					children: profile.brand
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-10 md:flex",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-[15px] text-foreground/80 transition-colors hover:text-foreground",
						children: link.label
					}) }, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "pill-button hidden px-6 py-2.5 text-sm hover:opacity-90 md:inline-flex",
					children: "Let's Connect"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "section-shell flex flex-col py-4",
				children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "block py-3 text-base text-foreground/80",
					children: link.label
				}) }, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "pt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						onClick: () => setOpen(false),
						className: "pill-button w-full px-6 py-3 text-sm",
						children: "Let's Connect"
					})
				})]
			})
		}) : null]
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "eyebrow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "h-px w-8 bg-foreground"
		}), children]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "section-shell scroll-mt-24 py-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "About Me" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid items-center gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fade-up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl",
						children: profile.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-md text-lg leading-relaxed text-muted-foreground",
						children: profile.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 inline-block border border-border px-6 py-3 text-2xl font-medium",
						children: profile.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: profile.cvUrl,
							download: true,
							className: "pill-button px-8 py-3.5 text-sm hover:opacity-90",
							children: "Download CV"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center md:justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-square w-64 overflow-hidden rounded-full bg-surface sm:w-80 lg:w-[26rem]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: profile.image,
						alt: profile.imageAlt,
						width: 912,
						height: 912,
						className: "h-full w-full object-cover"
					})
				})
			})]
		})]
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section-shell py-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Education & Training" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-12 flex max-w-4xl flex-col gap-8",
			children: education.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-card transition-transform duration-200 hover:-translate-y-0.5 sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-surface font-display text-3xl font-semibold",
						children: index + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "shrink-0 text-sm text-muted-foreground sm:pl-6",
									children: item.period
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: item.institution
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 list-disc space-y-1 pl-5 text-sm text-foreground/80",
								children: item.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
							})
						]
					})]
				})
			}, item.id))
		})]
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "experience",
		className: "section-shell scroll-mt-24 py-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Work Experience" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-12 flex max-w-4xl flex-col gap-8",
			children: experience.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-card transition-transform duration-200 hover:-translate-y-0.5 sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-surface font-display text-3xl font-semibold",
						children: index + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "shrink-0 text-sm text-muted-foreground sm:pl-6",
									children: item.period
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: item.company
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 list-disc space-y-1 pl-5 text-sm text-foreground/80",
								children: item.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
							})
						]
					})]
				})
			}, item.id))
		})]
	});
}
function ProjectCard({ project, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col rounded-3xl bg-surface p-6 transition-transform duration-200 hover:-translate-y-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl text-muted-foreground",
				children: String(index + 1).padStart(2, "0")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 text-2xl font-semibold",
				children: project.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex flex-wrap gap-2",
				children: project.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full border border-border bg-background px-3.5 py-1.5 text-xs",
					children: tech
				}, tech))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 overflow-hidden rounded-xl border border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: project.imageAlt,
					loading: "lazy",
					width: 1200,
					height: 800,
					className: "aspect-[3/2] w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground",
				children: project.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto pt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: project.githubUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "pill-button px-5 py-2.5 text-sm hover:opacity-90",
					children: ["source code", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "sr-only",
						children: [" for ", project.title]
					})]
				})
			})
		]
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		className: "section-shell scroll-mt-24 py-16 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Latest Projects" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-5xl font-bold sm:text-6xl",
				children: "Projects"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
					project,
					index
				}, project.id))
			})
		]
	});
}
function SkillItem({ skill }) {
	const Icon = skill.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex w-28 flex-col items-center gap-3 transition-transform duration-200 hover:-translate-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			"aria-hidden": "true",
			size: 44,
			style: { color: skill.color }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-center text-sm text-muted-foreground",
			children: skill.name
		})]
	});
}
function PillList({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "text-lg font-semibold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 flex flex-wrap gap-2.5",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/80",
			children: item
		}, item))
	})] });
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "skills",
		className: "section-shell scroll-mt-24 py-16 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Skills" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 max-w-lg font-display text-4xl font-bold leading-tight sm:text-5xl",
				children: "Exploring My Diverse Skill Set"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-14 flex flex-wrap justify-center gap-x-10 gap-y-12 sm:justify-start",
				children: skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillItem, { skill }, skill.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-10 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillList, {
						title: "Soft Skills",
						items: softSkills
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillList, {
						title: "Languages",
						items: languages
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillList, {
						title: "Hobbies",
						items: hobbies
					})
				]
			})
		]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var sendContactMessage = createServerFn({ method: "POST" }).inputValidator((data) => data).handler(createSsrRpc("f4ab91175279d24fdd2724e2cfe526fe74336bbdfd18bfac38060247ff17403a"));
var emptyForm = {
	name: "",
	email: "",
	message: ""
};
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validate(values) {
	const errors = {};
	const name = values.name.trim();
	const email = values.email.trim();
	const message = values.message.trim();
	if (!name) errors.name = "Name is required.";
	else if (name.length < 2) errors.name = "Please enter at least 2 characters.";
	if (!email) errors.email = "Email is required.";
	else if (!emailPattern.test(email)) errors.email = "Please enter a valid email address.";
	if (!message) errors.message = "Message is required.";
	else if (message.length < 10) errors.message = "Message must be at least 10 characters.";
	return errors;
}
function ContactForm() {
	const submit = useServerFn(sendContactMessage);
	const [values, setValues] = (0, import_react.useState)(emptyForm);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [statusMessage, setStatusMessage] = (0, import_react.useState)("");
	const update = (field) => (value) => {
		setValues((prev) => ({
			...prev,
			[field]: value
		}));
		setErrors((prev) => ({
			...prev,
			[field]: void 0
		}));
	};
	async function handleSubmit(event) {
		event.preventDefault();
		if (status === "sending") return;
		const nextErrors = validate(values);
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) {
			setStatus("idle");
			setStatusMessage("");
			return;
		}
		setStatus("sending");
		setStatusMessage("");
		try {
			const result = await submit({ data: {
				name: values.name.trim(),
				email: values.email.trim(),
				message: values.message.trim()
			} });
			if (result.success) {
				setStatus("success");
				setStatusMessage("Message sent successfully!");
				setValues(emptyForm);
			} else {
				setStatus("error");
				setStatusMessage(result.message);
			}
		} catch {
			setStatus("error");
			setStatusMessage("Unable to send your message right now. Please try again later.");
		}
	}
	const fieldClass = "w-full border-0 border-b border-border bg-transparent pb-3 pt-1 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		noValidate: true,
		onSubmit: handleSubmit,
		className: "rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "contact-name",
						className: "mb-2 block text-sm text-muted-foreground",
						children: "Name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "contact-name",
						name: "name",
						autoComplete: "name",
						value: values.name,
						onChange: (e) => update("name")(e.target.value),
						"aria-invalid": Boolean(errors.name),
						"aria-describedby": errors.name ? "contact-name-error" : void 0,
						className: fieldClass
					}),
					errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						id: "contact-name-error",
						className: "mt-2 text-sm text-destructive",
						children: errors.name
					}) : null
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "contact-email",
						className: "mb-2 block text-sm text-muted-foreground",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "contact-email",
						name: "email",
						type: "email",
						autoComplete: "email",
						value: values.email,
						onChange: (e) => update("email")(e.target.value),
						"aria-invalid": Boolean(errors.email),
						"aria-describedby": errors.email ? "contact-email-error" : void 0,
						className: fieldClass
					}),
					errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						id: "contact-email-error",
						className: "mt-2 text-sm text-destructive",
						children: errors.email
					}) : null
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "contact-message",
						className: "mb-2 block text-sm text-muted-foreground",
						children: "Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "contact-message",
						name: "message",
						rows: 3,
						value: values.message,
						onChange: (e) => update("message")(e.target.value),
						"aria-invalid": Boolean(errors.message),
						"aria-describedby": errors.message ? "contact-message-error" : void 0,
						className: `${fieldClass} resize-none`
					}),
					errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						id: "contact-message-error",
						className: "mt-2 text-sm text-destructive",
						children: errors.message
					}) : null
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 flex flex-wrap items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: status === "sending",
				className: "pill-button px-8 py-3.5 text-sm hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60",
				children: status === "sending" ? "Sending..." : "Send Message"
			}), statusMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				"aria-live": "polite",
				className: `text-sm ${status === "success" ? "text-foreground" : "text-destructive"}`,
				children: statusMessage
			}) : null]
		})]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "section-shell scroll-mt-24 py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 md:grid-cols-2 md:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Contact" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl",
					children: "Let's Get in Touch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-md text-lg leading-relaxed text-muted-foreground",
					children: "Have a question, feedback, or interested in collaborating? I'd love to hear from you!"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})]
		})
	});
}
var icons = {
	GitHub: Github,
	LinkedIn: Linkedin,
	Instagram
};
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell flex flex-col items-center gap-8 py-10 sm:flex-row sm:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-3 flex flex-col items-center gap-2 sm:order-1 sm:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							"© 2026 ",
							profile.name,
							". All rights reserved."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${profile.email}`,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: profile.email
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "order-1 flex h-16 w-16 items-center justify-center rounded-full border border-border font-display text-sm sm:order-2",
					children: profile.name.split(" ").map((w) => w[0]).join("")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "order-2 flex items-center gap-5 sm:order-3",
					children: socialLinks.map((link) => {
						const Icon = icons[link.name] ?? Github;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.url,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": link.name,
							className: "inline-flex text-muted-foreground transition-colors hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}) }, link.name);
					})
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
