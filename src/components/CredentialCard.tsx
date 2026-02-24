import { LucideIcon } from "lucide-react";

interface CredentialCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  highlight?: boolean;
}

const CredentialCard = ({ icon: Icon, label, value, highlight = false }: CredentialCardProps) => {
  return (
    <div
      className={`card-hover rounded-xl p-5 flex items-center gap-4 ${
        highlight
          ? "bg-gradient-gold text-accent-foreground shadow-gold border-2 border-accent"
          : "bg-card border border-border shadow-luxury"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
          highlight ? "bg-accent-foreground/10" : "bg-primary/10"
        }`}
      >
        <Icon className={`w-6 h-6 ${highlight ? "text-accent-foreground" : "text-primary"}`} />
      </div>
      <div>
        <p className={`text-xs font-medium ${highlight ? "text-accent-foreground/70" : "text-muted-foreground"}`}>
          {label}
        </p>
        <p className={`font-heading text-base font-bold mt-0.5 ${highlight ? "text-accent-foreground" : "text-foreground"}`} dir="ltr">
          {value}
        </p>
      </div>
    </div>
  );
};

export default CredentialCard;
