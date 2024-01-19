export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '❌';
  return <p className="p-4 mt-4 text-lg"> {`${icon} ${message}`}</p>;
}
