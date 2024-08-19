// pages/index.jsx
export default function Home() {
  const items = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="overflow-x-auto whitespace-nowrap py-4">
        <div className="flex space-x-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="inline-block min-w-[200px] h-[150px] bg-blue-500 text-white text-center leading-[150px] rounded-md"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
