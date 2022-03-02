import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { addToCartProductInfo, cartState } from "../../atom/addTocartAtom";
import { listOfVendorAtom } from "../../atom/ListOfVendorAtom";
import { totalsState } from "../../commonFunction/addToCartTotalsState";

function products(props) {
  const carts = useRecoilValue(cartState);
  const product = useRecoilValue(addToCartProductInfo);
  const totals = useRecoilValue(totalsState);

  const [cart, setCart] = useRecoilState(cartState);
  const [productCartInfo, updateProductCartInfo] = useRecoilState(addToCartProductInfo);

  const cartUpdate = async (item) => {
    setCart({ ...carts, [item.id]: (carts[item.id] || 0) + 1 });
    const dsfsd = JSON.parse(item.img);
    const img = dsfsd[0];
    updateProductCartInfo({ ...productCartInfo, [item.id]: [item.id, item.name, item.buyPrice, img] });
  };

  const cartRemove = async (item) => {
    const copy = { ...carts };
    if (copy[item.id] === 1) {
      delete copy[item.id];
      setCart(copy);
    } else {
      setCart({ ...copy, [item.id]: copy[item.id] - 1 });
    }
  };
  const vendorList = useRecoilValue(listOfVendorAtom);

  // const { data: session, loading } = useSession();

  //   const [token, setToken] = useState("");
  //   useEffect(() => {
  //     const checkToken = checkCookies("token");
  //     setToken(checkToken);
  //     // const { pathname } = Router;
  //     // if (pathname == "/") {
  //     //   Router.push("/");
  //     // }
  //   }, []);
  //   console.log(token);
  return (
    <div>
      <div>
        <div>
          <div className="app">
            <div className="app-wrap">
              <div className="app-contant">
                <div className="bg-white">
                  <div className="container-fluid p-0">
                    <div className="row no-gutters">
                      <div className="col-sm-6 col-lg-7 col-xxl-7  align-self-center order-2 order-sm-1 p-2" style={{ background: "#EAEBEF" }}>
                        <input id="title" type="text" class="form-control" placeholder="Search/Product Item" />

                        <div className="row no-gutters">
                          <div className="container">
                            <h2 className="title title-underline mb-4 ls-normal appear-animate"></h2>
                            <div
                              className="swiper-container swiper-theme shadow-swiper appear-animate pb-4 mb-8"
                              data-swiper-options="{
        'spaceBetween': 20,
        'slidesPerView': 2,
        'breakpoints': {
            '576': {
                'slidesPerView': 3
            },
            '768': {
                'slidesPerView': 5
            },
            '992': {
                'slidesPerView': 6
            },
            '1200': {
                'slidesPerView': 8
            }
        }
    }"
                            >
                              <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">
                                {props.recentItem.map((user, index) => (
                                  <div key={index} className="swiper-slide product-wrap mb-0">
                                    <div className="product text-center product-absolute">
                                      <div className="shadow">
                                        <figure className="brand">
                                          <a>
                                            {" "}
                                            <Image src={"/" + JSON.parse(user.img)} alt="Product" width={280} height={280} />
                                            {/* <img
                                              src={"https://baybridgebd.com/upload/" + JSON.parse(user.img)}
                                              alt="Product"
                                              style={{ height: "160px", width: "160px", objectFit: "fill" }}
                                            /> */}
                                          </a>
                                        </figure>
                                        <h4 className="product-name">
                                          <Link href={"/product-details/[productId]"} as={`/product-details/${user.id}`}>
                                            <a>
                                              {" "}
                                              <a href="">{user.name}</a>
                                            </a>
                                          </Link>
                                        </h4>
                                      </div>
                                      <div className="product-hidden-details">
                                        <div className="product-action">
                                          <a
                                            href="#"
                                            className="btn-product btn-cart btn btn-round btn-light"
                                            title="Add to Cart"
                                            onClick={() => cartUpdate(user)}
                                          >
                                            <i className="zmdi zmdi-shopping-cart" />
                                            <span>Add To Cart</span>
                                          </a>
                                          {carts[user.id] && (
                                            <button
                                              className="btn btn-round btn-light"
                                              onClick={() => {
                                                cartRemove(user);
                                              }}
                                            >
                                              Remove
                                            </button>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="swiper-pagination" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-xxl-5 col-lg-5  o-hidden order-1 order-sm-2 p-2">
                        <div className="row">
                          <div className="page-content">
                            <div className="container">
                              <div className="row gutter-lg mb-10">
                                <div className="col-lg-8 pr-lg-4 mb-6">
                                  <table className="shop-table cart-table">
                                    <thead>
                                      <tr>
                                        <th className="product-name">
                                          <span>Product</span>
                                        </th>
                                        <th />
                                        <th className="product-price">
                                          <span>Price</span>
                                        </th>
                                        <th className="product-quantity">
                                          <span>Quantity</span>
                                        </th>
                                        <th className="product-subtotal">
                                          <span>Subtotal</span>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {Object.entries(carts).map(([key, value]) => (
                                        <tr key={key}>
                                          <td className="product-thumbnail">
                                            <div className="p-relative">
                                              <a href="product-default.html">
                                                <figure>
                                                  <img src={`https://baybridgebd.com/upload/${product[key][3]}`} alt="product" height={84} width={94} />
                                                </figure>
                                              </a>
                                              {/* <button type="submit" className="btn btn-close">
                                                <i className="fas fa-times" />
                                              </button> */}
                                            </div>
                                          </td>
                                          <td className="product-name">
                                            <a href="product-default.html"> {product[key][1]}</a>
                                          </td>
                                          <td className="product-price">
                                            {" "}
                                            <span className="amount">{product[key][2]}</span>
                                          </td>
                                          <td className="product-quantity">
                                            <div className="input-group">
                                              <input className="quantity form-control" type="number" value={value} />
                                              {/* <button className="quantity-plus w-icon-plus" /> <button className="quantity-minus w-icon-minus" /> */}
                                            </div>
                                          </td>
                                          <td className="product-subtotal">
                                            <span className="amount">{product[key][2] * value}</span>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                  <div className="cart-action mb-6">
                                    <a href="#" className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto">
                                      <i className="w-icon-long-arrow-left" />
                                      Continue Shopping
                                    </a>
                                    {/* <button type="submit" className="btn btn-rounded btn-default btn-clear" name="clear_cart" value="Clear Cart">
                    Clear Cart
                  </button>
                  <button type="submit" className="btn btn-rounded btn-update disabled" name="update_cart" value="Update Cart">
                    Update Cart
                  </button> */}
                                  </div>
                                </div>
                                <div className="col-lg-4 sticky-sidebar-wrapper">
                                  <div className="sticky-sidebar">
                                    <div className="cart-summary mb-4">
                                      <h3 className="cart-title text-uppercase">Cart Totals</h3>
                                      <div className="cart-subtotal d-flex align-items-center justify-content-between">
                                        <label className="ls-25">Subtotal</label>
                                        <span>{totals.subtotal.toFixed(2)}</span>
                                      </div>
                                      <hr className="divider" />
                                      <ul className="shipping-methods mb-2">
                                        <li>
                                          <label className="shipping-title text-dark font-weight-bold">Shipping</label>
                                        </li>
                                        <li>
                                          <div className="custom-radio">
                                            <input type="radio" id="free-shipping" className="custom-control-input" name="shipping" />
                                            <label htmlFor="free-shipping" className="custom-control-label color-dark">
                                              Free Shipping
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="custom-radio">
                                            <input type="radio" id="local-pickup" className="custom-control-input" name="shipping" />
                                            <label htmlFor="local-pickup" className="custom-control-label color-dark">
                                              Local Pickup
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="custom-radio">
                                            <input type="radio" id="flat-rate" className="custom-control-input" name="shipping" />
                                            <label htmlFor="flat-rate" className="custom-control-label color-dark">
                                              Flat rate: $5.00
                                            </label>
                                          </div>
                                        </li>
                                      </ul>

                                      <hr className="divider mb-6" />
                                      <div className="order-total d-flex justify-content-between align-items-center">
                                        <label>Total</label>
                                        <span className="ls-50">{totals.total.toFixed(2)}</span>
                                      </div>

                                      <Link href="/checkout">
                                        <a className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout">
                                          Proceed to checkout
                                          <i className="w-icon-long-arrow-right" />
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row gutter-lg mb-10">
                          <div class="col-12 col-lg-12">
                            <div class="card card-statistics">
                              <div class="card-body">
                                <div class="table-responsive">
                                  <table class="table mb-0">
                                    <thead class="thead-light">
                                      <tr>
                                        <th scope="col">TOTAL ITEM</th>
                                        <th scope="col">2(4)</th>
                                        <th scope="col">TOTAL</th>
                                        <th scope="col">
                                          {" "}
                                          <span>{totals.subtotal.toFixed(2)}</span>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="row">DISCOUNT</th>
                                        <td>
                                          <input className="btn btn-round btn-dark" type="number" value="0" style={{ width: "120px" }} />
                                        </td>
                                        <td>TAX AMOUNT(%)</td>
                                        <td>
                                          <input className="btn btn-round btn-dark" type="number" value="0" style={{ width: "120px" }} />
                                        </td>
                                      </tr>

                                      <tr>
                                        <th scope="row">SHIPPING CHARGE</th>
                                        <td>
                                          {" "}
                                          <input className="btn btn-round btn-dark" type="number" value="0" style={{ width: "120px" }} />
                                        </td>
                                        <td>OTHER CHARGE</td>
                                        <td>
                                          {" "}
                                          <input className="btn btn-round btn-dark" type="number" value="0" style={{ width: "120px" }} />
                                        </td>
                                      </tr>
                                    </tbody>
                                    <thead class="thead-light">
                                      <tr>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col">TOTAL PAYABLE</th>
                                        <th scope="col">
                                          {" "}
                                          <span>{totals.subtotal.toFixed(2)}</span>
                                        </th>
                                      </tr>
                                    </thead>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-7 col-sm-6 text-center text-sm-left " style={{ background: "#F39C0F" }}>
                        <div className="col-lg-6 col-sm-6 text-center text-sm-left ">
                          <p className="text-white p-2 text-center">
                            {" "}
                            <span>{totals.subtotal.toFixed(2)}</span>
                          </p>
                        </div>
                        <div className="col  col-sm-6 ml-sm-auto text-center text-sm-right">
                          <p className="text-white">25/2/2022</p>
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-6 text-center text-sm-left ">
                        <div className="row">
                          <div className="col-lg-6 col-sm-6 text-center" style={{ background: "green" }}>
                            <p className="text-white text-center p-4">PLAY NOW</p>
                          </div>
                          <div className="col-lg-6 col-sm-6 text-center text-sm-left " style={{ background: "red" }}>
                            <p className="text-white  text-center p-4">HOLD</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end app-wrap */}
        </div>
        {/* end app */}
        {/* plugins */}
        {/* custom app */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data: recentItem } = await axios.get(process.env.API_URL + "/api/ev1/RecentProduct");

  return {
    props: { recentItem },
  };
}

export default products;
