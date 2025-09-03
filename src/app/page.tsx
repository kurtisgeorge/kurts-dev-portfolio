import { useInView } from "react-hook-inview";

export default function BlurFade({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ once: true });
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transition: `opacity 0.3s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
