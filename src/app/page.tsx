import { getData } from "@/lib/actions";
import logger from "@/lib/logger";

export default async function Home() {
  const res = (await getData()) || [];
  logger.debug("Result length: " + res.length);
  if (res.length > 1)
    return (
      <div className="">
        <h1 className="p-4">Call is coming from PostgreeSql neon Db</h1>
        {res.map((a) => {
          return (
            <>
              <p key={a.id}>{JSON.stringify(a)}</p>
            </>
          );
        })}
      </div>
    );

  return <></>;
}
