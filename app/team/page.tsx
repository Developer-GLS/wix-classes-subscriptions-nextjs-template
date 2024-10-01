import { useServerAuthSession } from '@app/hooks/useServerAuthSession';
export default async function TeamPage() {
  const wixSession = useServerAuthSession();
  return (
    <>
      <div className="px-3 py-12">
        <h1 className="text-center">Our team</h1>
      </div>
      <div className='max-w-4xl text-center mx-auto'>

<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam perspiciatis nesciunt blanditiis saepe unde delectus, tempora ipsam, similique impedit eaque explicabo incidunt necessitatibus laudantium, cum quasi aspernatur doloribus distinctio expedita veniam eius molestiae illum commodi a! Quasi voluptatibus cumque velit ad? Amet quos dicta eveniet alias commodi neque numquam doloribus!</p>
 </div>
    </>
  );
}
