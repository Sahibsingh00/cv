import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden p-3 print:p-0 print:border-b print:border-gray-200 print:last:border-b-0">
      <CardHeader className="print:p-0">
        <div className="space-y-1 print:space-y-0">
          <CardTitle className="text-base print:text-sm">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:block print:text-[10px]">
            {link}
          </div>
          <CardDescription className="font-mono text-xs print:text-[11px] print:m-0">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex print:mt-0 print:p-0">
        <div className="mt-2 flex flex-wrap gap-1 print:mt-0 print:gap-0.5">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px] print:px-1 print:py-0 print:text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
