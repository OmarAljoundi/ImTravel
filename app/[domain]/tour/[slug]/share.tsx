import Link from "next/link";

const Share = () => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-3 mb-8 pl-9 pr-3 py-3 ">
      <h1 className="text-xl font-bold">شارك البرنامج مع أصدقائك</h1>
      <ul className="flex gap-3 items-center ">
        <li>
          <Link
            href="#"
            className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary text-white"
          >
            <i className="lab text-xl la-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary text-white"
          >
            <i className="lab text-xl la-twitter"></i>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary text-white"
          >
            <i className="lab text-xl la-instagram"></i>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary text-white"
          >
            <i className="lab text-xl la-linkedin-in"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Share;
