import Vue from "vue";
import VueRouter from "vue-router";
import VueCookier from "vue-cookies";
// import Layout from "@/layout/main";
// import GettingStartted from "@/views/getting-startted";

// import "../styles/nprogress.scss";
// import NProgress from "nprogress";
// import Cookies from "js-cookie";
// import amisAuth from "@/api/auth";

// import Organization from "@/api/etax/organization";

// import Cookie from "@/utils/cookie";
//import store from "@/store"
// import { setToken, getToken } from "@/utils/token";
// import { createNamespacedHelpers } from "vuex";
Vue.use(VueRouter);
Vue.use(VueCookier);
export const routes = [
  {
    path: "/style-guideline",
    redirect: "StyleGuideLine",
    component: () => import("@/layout/style-guideline"),
    children: [
      {
        path: "",
        name: "StyleGuideLine",
        component: () => import("@/views/styleguideline")
      }
    ]
  },
  {
    path: "/employee",
    component: () => import("@/layout/main"),
    redirect: { name: "Employee" },
    children: [
      {
        path: "",
        name: "Employee",
        component: () => import("@/views/employee/index.vue"),
      },
    ],
  },
  // {
  //   path: "/tax-period",
  //   component: Layout,
  //   redirect: { name: "TaxPeriod" },
  //   children: [
  //     {
  //       path: "",
  //       name: "TaxPeriod",
  //       component: () => import("@/views/tax-period-v2/index.vue"),
  //       meta: {
  //         title: "Kê khai thuế theo kỳ",
  //       },
  //     },
  //     {
  //       path: "v1",
  //       name: "TaxPeriod",
  //       component: () => import("@/views/tax-period/index.vue"),
  //       meta: {
  //         title: "Kê khai thuế theo kỳ",
  //       },
  //     },
  //     {
  //       path: ":id/employee/create",
  //       name: "CreateEmployee",
  //       component: () =>
  //         import("@/views/tax-period/temporary-detail/components/new.vue"),
  //       meta: {
  //         title: "Thêm mới người nộp thuế",
  //         isBack: true,
  //       },
  //     },
  //     {
  //       path: ":id/employee/edit/:idTempDetail",
  //       name: "EditEmployee",
  //       component: () =>
  //         import("@/views/tax-period/temporary-detail/components/new.vue"),
  //       meta: {
  //         title: "Sửa thông tin người nộp thuế",
  //         isBack: true,
  //       },
  //     },
  //     {
  //       path: ":id/:mode",
  //       name: "TaxPeriodDetail",
  //       component: () =>
  //         import("@/views/tax-period/temporary-detail/index.vue"),
  //       meta: {
  //         title: "Kê khai thuế theo kỳ",
  //         isBack: true,
  //       },
  //     },
  //   ],
  // },
  // Router Getting Started
  // {
  //   path: "/getting-started",
  //   name: "GettingStarted",
  //   component: () => import("@/layout/getting-started/index.vue"),
  //   redirect: { name: "ListOrganizations" },
  //   children: [
  //     {
  //       path: "",
  //       name: "ListOrganizations",
  //       component: () => import("@/views/getting-startted/index.vue"),
  //       meta: {
  //         title: "Danh sách đơn vị",
  //       },
  //     },
  //     {
  //       path: "unit",
  //       name: "UnitOrganization",
  //       component: () =>
  //         import("@/views/getting-startted/components/unit-index.vue"),
  //       meta: {
  //         title: "Khai báo đơn vị ",
  //       },
  //     },
  //     {
  //       path: "owner",
  //       name: "OwnerOrganization",
  //       component: () =>
  //         import("@/views/getting-startted/components/owner-index.vue"),
  //       meta: {
  //         title: "Khai báo Đơn vị chủ quản",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/tax-payer",
  //   component: Layout,
  //   redirect: { name: "TaxPayer" },
  //   children: [
  //     {
  //       path: "",
  //       name: "TaxPayer",
  //       component: () => import("@/views/tax-payer/index.vue"),
  //     },
  //   ],
  // },
  // {
  //   path: "/dependent-register",
  //   component: Layout,
  //   redirect: { name: "DependentRegister" },
  //   children: [
  //     {
  //       path: "",
  //       name: "DependentRegister",
  //       component: () => import("@/views/dependent-register/index.vue"),
  //       meta: {
  //         title: "Đăng ký người phụ thuộc",
  //       },
  //     },
  //     {
  //       path: ":id",
  //       name: "DependentRegisterDetail",
  //       component: () =>
  //         import(
  //           "@/views/dependent-register/dependent-register-detail/index.vue"
  //         ),
  //       meta: {
  //         title: "",
  //         isBack: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/a",
  //   component: Layout,
  //   redirect: { name: "appendix-03BK" },
  //   children: [
  //     {
  //       path: "",
  //       name: "appendix-03BK",
  //       component: () =>
  //         import(
  //           "@/views/tax-settlement/tax-settlement-detail/components/appendix-03BK.vue"
  //         ),
  //     },
  //   ],
  // },
  // {
  //   path: "/tax-settlement",
  //   component: Layout,
  //   redirect: { name: "TaxSettlement" },
  //   children: [
  //     {
  //       path: "",
  //       name: "TaxSettlement",
  //       component: () => import("@/views/tax-settlement/index.vue"),
  //       meta: {
  //         title: "Quyết toán thuế",
  //       },
  //     },
  //     {
  //       path: ":id",
  //       name: "TaxSettlementDetail",
  //       component: () =>
  //         import("@/views/tax-settlement/tax-settlement-detail/index.vue"),
  //       meta: {
  //         title: "",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/tax-register",
  //   component: Layout,
  //   redirect: { name: "TaxRegister" },
  //   children: [
  //     {
  //       path: "",
  //       name: "TaxRegister",
  //       component: () => import("@/views/tax-register/index.vue"),
  //       meta: {
  //         title: "Đăng ký mã số thuế",
  //       },
  //     },
  //     {
  //       path: ":id",
  //       name: "TaxRegisterDetails",
  //       component: () =>
  //         import("@/views/tax-register/tax-register-detail/index.vue"),
  //     },
  //   ],
  // },
  // {
  //   path: "/setting",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "",
  //       name: "Setting",
  //       component: () => import("@/views/setting/index.vue"),
  //       meta: {
  //         title: "Thiết lập",
  //         isBack: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/styleguideline",
  //   name: "StyleGuideline",
  //   component: () => import("@/views/styleguideline/index.vue"),
  // },
  // {
  //   path: "/styleguideline_v2",
  //   name: "StyleGuideline_V2",
  //   component: () => import("@/views/styleguideline/index-v2.vue"),
  // }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// router.beforeResolve(async (to, from, next) => {
//   if (to.name || from.name) {
//     NProgress.start();
//   }

//   next();
// });
// router.afterEach(async (to, from) => {
//   NProgress.done();
//   if (to.name || from.name) {
//     NProgress.done();
//   } else NProgress.done();
// });

// router.beforeEach(async (to, from, next) => {
//   var organizationId = Cookie.getOrganizationCookie();
//   var token = getToken();
//   // nếu là môi trường triển khai
//   if (process.env.NODE_ENV != "development") {
//     //Kiểm tra token có trong localStorage không
//     if (typeof token == "undefined" || token == "" || token == null) {
//       //lấy token trên query
//       var sid = to.query.sid;
//       if (!sid) {
//         sid = Cookies.get("mt-sid");
//       }
//       if (sid) {
//         // sid = encodeURIComponent(sid);
//         //Gọi service lấy thông tin token từ server
//         var result = await amisAuth.getToken(sid);
//         if (
//           typeof result.data.success === "undefined" ||
//           result.data.success == false ||
//           result == null
//         ) {
//           window.location.href = process.env.VUE_APP_AMIS_URL;
//         } else {
//           var mtToken =
//             result.data.data.tokenType + " " + result.data.data.accessToken;
//           setToken(mtToken);
//           token = mtToken;
//         }
//       } else {
//         window.location.href = process.env.VUE_APP_AMIS_URL;
//       }
//     }
//   }
//   // nếu là môi trường phát triển
//   if (
//     !organizationId &&
//     to.path !== "/getting-started" &&
//     to.path != "/styleguideline" &&
//     /^(\/getting-started)/.exec(to.path) == null
//   ) {
//     next("/getting-started");
//   }
//   if (to.path == "/tax-period/" && organizationId) {
//     next("/tax-period");
//   }
//   if (to.path == "/getting-started/owner" && from.path != "getting-started") {
//     next("/getting-started");
//   }
//   next();
// });
export default router;
