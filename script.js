document.addEventListener("DOMContentLoaded", () => {
  const departments = [
    {
      name: "Administration",
      employees: [
        { firstName: "Arash", lastName: "Arash" },
        { firstName: "Madeleine", lastName: "Madden" }
      ]
    },
    {
      name: "Audit",
      employees: [
        { firstName: "Josha", lastName: "Sadowski" },
        { firstName: "Kate", lastName: "Fleetwood" }
      ]
    },
    {
      name: "Banking Operations",
      employees: [
        { firstName: "Priyanka", lastName: "Bose" },
        { firstName: "Hammed", lastName: "Animashaun" },
        { firstName: "Álvaro", lastName: "Morte" }
      ]
    }
  ];

  const main = document.getElementById("employee-directory");

  departments.forEach(dept => {
    const section = document.createElement("section");

    const heading = document.createElement("h2");
    heading.textContent = dept.name;
    section.appendChild(heading);

    const list = document.createElement("ul");

    dept.employees.forEach(emp => {
      const li = document.createElement("li");
      li.textContent = `${emp.firstName} ${emp.lastName}`;
      list.appendChild(li);
    });

    section.appendChild(list);
    main.appendChild(section);
  });

  const year = new Date().getFullYear();
  document.getElementById("copyright").textContent =
    `Copyright Pixell River Financial ${year}`;
});
