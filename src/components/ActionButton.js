import LightRays from './LightRays';

export default function ActionButton({ link, text }) {
  return (
    <div className="text-center py-2">
      <a href={link} target="_blank" rel="noreferrer">
        <button
          className="relative bg-transparent text-sky-600 font-semibold py-2 px-8 border-2 border-sky-600 rounded">
          <span className="-z-10 absolute top-0 left-0">
            <LightRays color="#0ea5e9" />
          </span>
          {text}
        </button>
      </a>
    </div>
  );
}