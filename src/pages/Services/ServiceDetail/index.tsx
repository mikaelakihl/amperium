import { Navigate, useParams } from 'react-router';
import { getServiceIdFromSlug, servicesPath } from '../../../routes/services';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const serviceId = slug ? getServiceIdFromSlug(slug) : undefined;

  if (!serviceId) {
    return <Navigate to={servicesPath} replace />;
  }

  return <div className="container" />;
}
