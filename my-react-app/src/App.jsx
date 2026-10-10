
import React, { useState } from "react";
import "./App.css";
import Heart from "./Heart";
import Modal from "./Modal";

const App = () => {
  const [data, setData] = useState([
    { name: "Qurutob", id: 1, status: true, price: 30 },
    { name: "Qurutob", id: 2, status: true, price: 30 },
  ]);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [elemEdit, setElemEdit] = useState(null);
  const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("all");

  const handleSubmitAdd = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name: e.target.name.value,
      price: Number(e.target.price.value),
      status: false,
    };

    setData((prev) => [...prev, newUser]);
    setOpenAdd(false);
    e.target.reset();
  };
  const handleSubmitEdit = (e) => {
    e.preventDefault();

    setData((prev) =>
      prev.map((item) =>
        item.id === elemEdit.id ? { ...elemEdit } : item
      )
    );

    setOpenEdit(false);
    setElemEdit(null);
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };
  const handleEdit = (item) => {
    setElemEdit({ ...item });
    setOpenEdit(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F2]">

      <div className="flex flex-wrap items-center justify-center gap-4 bg-[#A98C64] p-4 lg:justify-around">
        <div className="flex items-center gap-4">
          <img
            src="/Vector (2).png"
            alt=""
            className="w-8"
          />

          <p className="text-lg text-white sm:text-xl lg:text-3xl">
            Скидка 20% на первый заказ
          </p>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <p className="text-xl text-white">Заказать</p>

          <img
            src="/Group (5).png"
            alt=""
            className="w-8"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 p-4 lg:justify-around">
        <img
          src="/Group 161.png"
          alt="Logo"
          className="w-32 sm:w-40"
        />

        <div className="hidden items-center gap-4 lg:flex">
          <p className="text-[#493E3E]">Подбор рациона</p>
          <p className="text-[#493E3E]">Программы питания</p>
          <p className="text-[#493E3E]">О нас</p>
          <p className="text-[#493E3E]">Акции</p>
          <p className="text-[#493E3E]">FAQ</p>
          <p className="text-[#493E3E]">Отзывы</p>
        </div>

        <div className="hidden flex-col items-end gap-4 lg:flex">
          <p className="text-[18px] text-[#4D8F76] underline underline-offset-4">
            Перезвоните мне
          </p>

          <h2 className="text-2xl font-bold text-[#493E3E] xl:text-3xl">
            +7 988 500-1-700
          </h2>
        </div>

        <div className="lg:hidden">
          <img src="/Group 82.png" alt="Menu" className="w-8" />
        </div>
      </div>ъ
      <div className="flex flex-col items-center justify-center gap-8 p-6 lg:flex-row lg:gap-12 lg:p-10">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Доставка прогрессивного
            <br className="hidden sm:block" />
            питания для гурманов
          </h1>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#4D947B] px-5 py-3 text-xs font-semibold text-white">
              Подобрать питание
            </button>

            <button className="rounded-full border border-[#4D947B] px-5 py-3 text-xs font-semibold text-[#4D947B]">
              Получить консультацию
            </button>
          </div>
        </div>

        <img
          src="/porapoest-top 1.png"
          alt="Еда"
          className="w-full max-w-[500px] object-contain lg:w-1/2"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <Heart
          row={true}
          img="/Group (5).svg"
          title="Еда, которая сделает тебя лучше!"
          text="Мы помогаем создавать новое качество жизни для наших клиентов, чтоб каждый человек был счастливым, здоровым и не отвлекался на рутинные процессы."
          text2="Для этого мы создали новый уникальный продукт на рынке доставки еды и приглашаем вас окунуться в гастрономический шик уже сегодня."
        />

        <Heart
          row={false}
          img="/Frame.svg"
          title="Изысканное меню высокой кухни"
          text="В наших блюдах мы продумали каждую деталь, все ингредиенты тщательно подобраны и создают неповторимый вкус."
          text2="Качественные продукты, деликатесы и суперфуды, которые помогают поддерживать здоровье и обмен веществ. Мы используем крафтовые ингредиенты: с любовью выращиваем микрозелень, делаем соусы и масла, маринуем мясо, рыбу и морепродукты."
        />
      </div>

      <img
        src="/Group 171.png"
        className="hidden w-full lg:block"
        alt=""
      />

      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-[#493E3E] sm:text-3xl">
          Подберите рацион для своих целей
        </h2>
      </div>

      <div className="mx-auto max-w-6xl p-5">
        <button
          onClick={() => setOpenAdd(true)}
          className="rounded-xl bg-[#4D947B] px-5 py-3 text-white"
        >
          Add +
        </button>

       <div className="flex flex-col sm:flex-row gap-3 mb-5">
  <input
    type="text"
    placeholder="Search by name..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border rounded-lg px-4 py-2 outline-none"
  />

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="border rounded-lg px-4 py-2 outline-none"
  >
    <option value="all">All status</option>
    <option value="true">Active</option>
    <option value="false">Inactive</option>
  </select>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {data
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      statusFilter === "all"
        ? true
        : String(item.status) === statusFilter
    )
    .map((item) => (
      <div key={item.id} className="border rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold">{item.name}</h2>

        <label className="flex items-center gap-2 mt-3 cursor-pointer">
          <input
            type="checkbox"
            checked={item.status}
            onChange={() =>
              setData((prev) =>
                prev.map((user) =>
                  user.id === item.id
                    ? { ...user, status: !user.status }
                    : user
                )
              )
            }
          />
          <span>{item.status ? "Active" : "Inactive"}</span>
        </label>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => handleEdit(item)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
        </div>
      </div>

      <Modal
        open={openAdd}
        setOpen={setOpenAdd}
        title="Add"
      >
        <form onSubmit={handleSubmitAdd} className="mx-auto grid w-full max-w-md gap-4">
          <input
            name="name"
            placeholder="Name"
            required
            className="rounded-lg border p-3 outline-none focus:border-[#4D947B]"
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            required
            className="rounded-lg border p-3 outline-none focus:border-[#4D947B]"
          />

          <button
            type="submit"
            className="rounded-xl bg-[#4D947B] p-3 text-white"
          >
            Save
          </button>
        </form>
      </Modal>
      <Modal
        open={openEdit}
        setOpen={setOpenEdit}
        title="Edit"
      >
        <form onSubmit={handleSubmitEdit} className="mx-auto grid w-full max-w-md gap-4">
          <input
            name="name"
            value={elemEdit?.name ?? ""}
            onChange={(e) =>
              setElemEdit((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            required
            placeholder="Name"
            className="rounded-lg border p-3 outline-none focus:border-[#4D947B]"
          />

          <input
            name="price"
            type="number"
            value={elemEdit?.price ?? ""}
            onChange={(e) =>
              setElemEdit((prev) => ({
                ...prev,
                price: e.target.value,
              }))
            }
            required
            placeholder="Price"
            className="rounded-lg border p-3 outline-none focus:border-[#4D947B]"
          />

          <button
            type="submit"
            className="rounded-xl bg-[#4D947B] p-3 text-white"
          >
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default App;