import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div className="flex justify-center mt-4 text-2xl flex-col items-center">
      <div className="w-1/2 border border-green-500 p-2">
        <h2 className="text-center mb-2 text-3xl font-semibold border-b-4 border-orange-500">
          {t("title")}
        </h2>
        <p className="italic">{t("content")}</p>
      </div>
    </div>
  );
}
