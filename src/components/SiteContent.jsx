import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";

// Hook to get site content
export function useSiteContent() {
  const { data: contents = [], isLoading } = useQuery({
    queryKey: ['siteContent'],
    queryFn: () => base44.entities.SiteContent.list(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const getContent = (section, key, defaultValue = '') => {
    const content = contents.find(c => c.section === section && c.key === key);
    return content?.value || defaultValue;
  };

  return { getContent, isLoading, contents };
}