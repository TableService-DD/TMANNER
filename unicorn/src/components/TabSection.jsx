export default function TabSection({ tabs, active, setActive }) {
  const activeTab = (index) => {
    setActive(index);
  };
  return (
    <section className="grid grid-cols-4 px-3 py-3 gap-4">
      {tabs.map((tab, index) => {
        return (
          <button
            key={tab}
            onClick={() => activeTab(index)}
            className={`font-bold py-1 border-primary border-b-[3px]  ${
              index === active
                ? "text-primary"
                : "border-opacity-0 text-textGray"
            }
                    `}
          >
            {tab}
          </button>
        );
        // </Link>
      })}
    </section>
  );
}
