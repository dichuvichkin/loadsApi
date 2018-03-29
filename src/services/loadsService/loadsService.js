import axios from "axios";

const url = "http://loads.ati.su/api/loads";

const dataForm = {
  page: 1,
  itemsPerPage: 10,
  filter: {
    fromRadius: 0,
    exactFromGeos: false,
    toRadius: 0,
    exactToGeos: false,
    ellipse: {
      enabled: false,
      maxEnlargment: 0,
      maxEnlargmentUnit: 1,
      minLength: 0,
      minLengthUnit: 1,
      units: [{ key: 1, value: "%" }, { key: 2, value: "км" }]
    },
    routeParams: { enabled: false },
    weight: {},
    volume: {},
    length: {},
    height: {},
    width: {},
    dateOption: "today-plus",
    rateType: 1,
    truckType: 0,
    loadingType: 0,
    extraParams: 0,
    dogruz: 0,
    firmRating: 0,
    firmListsExclusiveMode: false,
    firmListsInclusive: [],
    firmListsExclusive: [],
    hideHiddenLoads: true,
    sortingType: 2,
    changeDate: 0,
    boardList: [],
    withDimensions: false,
    dateFrom: "2018-03-27",
    dateTo: null,
    hash2: 993602606,
    from: "Екатеринбург, Свердловская область, Россия",
    fromList: null,
    fromGeo_tmp: "2_60",
    exactFromGeos_tmp: null,
    fromGeo: "2_60",
    firmName: ""
  },
  captcha: { id: null, text: "" },
  userFilterId: null,
  subscriptionId: null
};

const getLoadsAsync = async () => {
  // const { data } = await instance.post("/", dataForm);
  // const promisesArray = [];
  // const pages = Math.ceil(data.totalItems / 10);
  // const loads = [...data.loads];
  // for (let i = 2; i <= pages; i += 1) {
  //   promisesArray.push(
  //     instance.post("/", {
  //       ...dataForm,
  //       page: i
  //     })
  //   );
  // }
  // try {
  //   const promisesResult = await Promise.all(promisesArray);
  //   promisesResult.forEach(result => {
  //     if (result) {
  //       result.data.loads.forEach(load => {
  //         loads.push(load);
  //       });
  //     }
  //   });
  //   return {
  //     count: loads.length
  //   };
  // } catch ({ response }) {
  //   return {
  //     error: "ERROR YEAH!!!1!",
  //     message: response && response.data
  //   };
  // }
  const message = "Hell yeah!!!1!!";
  return {
    message
  };
};

const loadsService = () => ({
  getLoadsAsync
});

export default loadsService;
