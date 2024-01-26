import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="head-text text-left">Home</h1>
      <Link className="text-red-400" href="/onboarding">
        Sa
      </Link>
    </div>
  );
}
