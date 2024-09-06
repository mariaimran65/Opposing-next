import { useRouter } from 'next/router';

export default function useRoute() {
  return useRouter().asPath;
}
