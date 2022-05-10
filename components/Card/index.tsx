import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";

export const Card: React.FC<Post> = ({ ...props }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg">
      <time dateTime={props.date} className="block text-sm text-slate-700">
        {format(parseISO(props.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-3xl font-bold">
        <Link href={props.url}>
          <a className="text-white hover:text-gray-400 duration-300 transition-all">
            {props.title}
          </a>
        </Link>
      </h2>
      <p className="mt-2 text-slate-600">
        {props?.subtitle ?? `${props.body.raw.slice(0, 40)}...`}
      </p>
    </div>
  );
};
