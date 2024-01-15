import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsRobot } from 'react-icons/bs';

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-4 lg:h-20 lg:px-10">
      <button className="p-2">
        <AiOutlineMenu className="h-5 w-5 lg:h-6 lg:w-6" />
      </button>
      <Link href="/">
        <h1 className="text-3xl font-medium text-slate-600 lg:text-4xl">
          u._.ryu__blog
        </h1>
      </Link>
      <Link href="/posts" className="p-2">
        <BsRobot className="h-5 w-5 lg:h-6 lg:w-6" />
      </Link>
    </header>
  );
}
