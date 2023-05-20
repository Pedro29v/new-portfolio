export default function Nav() {
  return (
    <nav className="w-[100%] h-[6rem] p-2 bg-colorYellow text-black flex justify-between items-center">
      <div className="font-amatic font-bold text-[2.5em] ml-10 ">Pedro.dev</div>

      <div className="flex gap-6 font-bold text-[1.2em] mr-10 ">
        <a>About</a>
        <a>Skills</a>
        <a>Projects</a>
        <a>Contact</a>
      </div>
    </nav>
  );
}
