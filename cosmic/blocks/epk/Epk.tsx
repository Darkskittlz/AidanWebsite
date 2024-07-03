import { cn, getFormattedDate } from "@/cosmic/utils";
import { Calendar, Clock, Pin } from "lucide-react";
import Link from "next/link";

export type EventCardType = {
  title: string;
  slug: string;
  metadata: {
    description: string;
    location: string;
    start_date: string;
    start_time: string;
    end_date: string;
    end_time: string;
    image: {
      imgix_url: string;
    };
  };
};

export function Epk({
  event,
  className,
}: {
  event: EventCardType;
  className?: string;
}) {
  return (
    <div className="w-full overflow-hidden group-hover:opacity-74">
      <h1>EPK</h1>
    </div>
  );
}
