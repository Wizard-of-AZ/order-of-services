export default function AnnouncementItem({ organization, announcements, link }) {
  return (
    <div>
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <h2 className="mb-2 text-lg font-bold text-gray-900 text-center">{organization}</h2>
      <div className="text-center pb-4">{announcements}</div>
      {link && (
        <a className="underline my-1 font-route text-sky-600 font-semibold text-center pb-4" href={link} target="_blank" rel="noreferrer">{link}</a>
      )}

    </div>
  );
}