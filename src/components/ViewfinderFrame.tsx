// Fixed camera-viewfinder corner brackets, a subtle photography motif over the whole page.
export default function ViewfinderFrame() {
  const bracket = "absolute h-6 w-6 border-[var(--accent)]/40 sm:h-8 sm:w-8";
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-3 z-30 sm:inset-5">
      <span className={`${bracket} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${bracket} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${bracket} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${bracket} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}
