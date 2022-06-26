<template>
  <div class="flex justify-center items-center p-5 bg-slate-50 w-screen">
    <input type="text" class="outline outline-1 outline-slate-300 p-1 w-100" />

    <select
      type="select"
      class="outline outline-1 outline-slate-300 p-1 w-60 hidden md:flex"
    >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
    <input
      type="text"
      class="outline outline-1 outline-slate-300 p-1 w-20 hidden md:flex"
    />
    <select
      type="select"
      class="outline outline-1 outline-slate-300 p-1 w-50 hidden md:flex"
    >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
    <input type="button" class="outline outline-1 outline-slate-300 p-1 w-20" />
  </div>
</template>
