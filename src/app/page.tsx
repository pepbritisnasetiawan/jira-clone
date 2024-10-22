import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="">
      <Button size="lg">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Mted</Button>
      <Button variant="outline">Outlie</Button>
      <Button variant="teritary">Teritary</Button>
    </div>
  );
}
