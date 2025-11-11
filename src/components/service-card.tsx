export function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white border border-secondary/20 rounded-2xl shadow-sm hover:shadow-md transition-all p-8">
      <h3 className="font-semibold text-xl text-primary mb-3">{title}</h3>
      <p className="text-foreground/80 text-base leading-relaxed">{desc}</p>
    </div>
  )
}
