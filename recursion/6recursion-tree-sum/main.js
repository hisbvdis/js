// Древовидный объект, который будем обходить
let company = {
  sales: [
    {
      name: "John",
      salary: 1000
    },
    {
      name: "Alice",
      salary: 600
    }
  ],
  development: {
    sites: {
      siteA: [
        {
          name: "Peter",
          salary: 2000
        },
        {
          name: "Alex",
          salary: 1800
        }
      ],
      siteB: [
        {
          name: "Roma",
          salary: 450
        },
        {
          name: "Ivan",
          salary: 18
        }
      ]
    },
    apps: [
      {
        name: "Vasya",
        salary: 500
      },
      {
        name: "Nastya",
        salary: 4000
      }
    ]
  }
}


// Применение функции
console.log(sumSalaries(company));


// Функция рекурсивного обхода объекта (краткая)
function sumSalaries(depart) {
  if (Array.isArray(depart)) {
    return depart.reduce((sum, employee) => sum += employee.salary, 0);
  } 
  else {
    let subDeparts = Object.values(depart);
    return subDeparts.reduce((result, subDeparts) => result += sumSalaries(subDeparts), 0);
  }
}



// Функция рекурсивного обхода объекта (подробная)
function sumSalaries(depart) {
  let sum = 0;
  
  if (Array.isArray(depart)) {
    return depart.reduce((result, employee) => result += employee.salary, 0);
  } 
  
  else {
    for (let subDepart of Object.values(depart)) {
      sum += sumSalaries(subDepart);
    }
  }

  return sum;
}