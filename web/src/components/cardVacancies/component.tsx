import { Briefcase, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

interface VacancyCardProps {
  id: number;
  roleTitle: string;
  onClick: () => void;
}

export function VacancyCard({ id, roleTitle, onClick }: VacancyCardProps) {
  return (
    <Card
      key={id}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="group cursor-pointer overflow-hidden border-border/70 bg-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <CardContent className="p-4 sm:p-5">
        {/* Icon and action */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center justify-center transition-colors h-11 w-11 shrink-0 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <Briefcase className="w-5 h-5" />
          </div>

          <div className="flex items-center justify-center w-8 h-8 transition-all rounded-full shrink-0 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary">
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>

        {/* Vacancy information */}
        <div className="mt-4 space-y-2">
          <h3 className="text-base font-semibold leading-6 tracking-tight transition-colors line-clamp-2 min-h-12 group-hover:text-primary">
            {roleTitle}
          </h3>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Kelola detail lowongan</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 mt-4 border-t border-border/70">
          <span className="text-xs font-medium transition-opacity text-primary group-hover:opacity-100">
            Edit lowongan
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export function LoadingStateVacancy() {
  return (
    <div className="space-y-4">
      {/* Header skeleton */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <Skeleton className="w-40 h-6" />
          <Skeleton className="w-64 h-4 max-w-full" />
        </div>

        <Skeleton className="rounded-full h-7 w-28" />
      </div>

      {/* Vacancy card skeletons */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-4 sm:p-5">
              {/* Icon and action */}
              <div className="flex items-start justify-between">
                <Skeleton className="h-11 w-11 rounded-xl" />
                <Skeleton className="w-8 h-8 rounded-full" />
              </div>

              {/* Title and description */}
              <div className="mt-4 space-y-3">
                <div className="space-y-2">
                  <Skeleton className="w-4/5 h-5" />
                  <Skeleton className="w-3/5 h-5" />
                </div>

                <Skeleton className="h-3.5 w-40" />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 mt-4 border-t">
                <Skeleton className="h-3.5 w-24" />
                <Skeleton className="h-3.5 w-20" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function EmptyStateVacancy() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-12 text-center border border-dashed rounded-xl">
      <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-muted">
        <Briefcase className="w-6 h-6 text-muted-foreground" />
      </div>

      <h3 className="mt-4 text-base font-semibold">Belum ada lowongan</h3>

      <p className="max-w-sm mt-1 text-sm text-muted-foreground">
        Lowongan pekerjaan yang kamu buat akan ditampilkan di sini.
      </p>
    </div>
  );
}
