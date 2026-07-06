export const servicesSegment = 'tjanster';
export const servicesPath = `/${servicesSegment}`;

export const serviceSlugs = {
  service: 'service',
  electrical: 'elinstallation',
  project: 'projektledning',
} as const;

export type ServiceId = keyof typeof serviceSlugs;

export function serviceDetailPath(id: ServiceId) {
  return `${servicesPath}/${serviceSlugs[id]}`;
}

export function getServiceIdFromSlug(slug: string): ServiceId | undefined {
  return (Object.keys(serviceSlugs) as ServiceId[]).find(
    (id) => serviceSlugs[id] === slug
  );
}
