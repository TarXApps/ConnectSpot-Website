const modules = import.meta.glob("../assets/clients/*.png", { eager: true, import: "default" });

export const clientLogos = Object.keys(modules)
  .sort()
  .map((key) => modules[key]);
