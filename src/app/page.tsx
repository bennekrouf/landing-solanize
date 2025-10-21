import { redirect } from 'next/navigation';

export default function RootRedirectPage() {
  // Simple redirect to English by default
  redirect('/en');
}
