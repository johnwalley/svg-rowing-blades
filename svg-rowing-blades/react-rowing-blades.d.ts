declare module "react-rowing-blades" {
  const Blade: React.ComponentType<{
    club: string;
    size?: number;
    className?: sgring;
  }>;
  export default Blade;
  export const clubs: { [category: string]: string[] };
  export const names: { [category: string]: { [club: string]: string } };
  export const shortNames: { [category: string]: { [club: string]: string } };
}
