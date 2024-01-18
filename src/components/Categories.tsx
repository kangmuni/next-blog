type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <ul className="flex list-none mb-9">
      {categories.map((category) => (
        <li
          key={category}
          onClick={() => onClick(category)}
          className="cursor-pointer mr-6 py-2 px-8 border-solid rounded-full bg-slate-100 hover:bg-slate-600 hover:text-white"
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
