import PlansList from '@app/components/Plan/PlanList';
import ServiceListPreviewView from '@app/components/ServiceList/ServiceListPreview';
import { useServerAuthSession } from '@app/hooks/useServerAuthSession';
import { safeGetServices } from '@app/model/service/service-api';
import { safeGetPaidPlans } from '@app/model/paid-plans/paid-plans-api';

export default async function VisitUsPage() {
  const wixSession = useServerAuthSession();
  const {
    data: { services },
  } = await safeGetServices(wixSession, { limit: 3 });
  const { data: plans } = await safeGetPaidPlans(wixSession, { limit: 3 });
  return (
    <>
      <div className="px-3 py-12">
        <h1 className="text-center">Visit us</h1>
      </div>
      <ServiceListPreviewView services={services} />
    </>
  );
}
