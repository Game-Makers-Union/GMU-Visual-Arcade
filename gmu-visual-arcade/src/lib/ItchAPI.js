const ITCH_DOMAIN = "itch.io";
/**
 * @typedef GameDataOptions
 * @property {string} user
 * @property {string} game
 * @property {string} secret
 */

/**
 * @typedef GameData
 * @property {string} id
 * @property {string} title
 * @property {string} price
 * @property {string?} original_price
 * @property {{
 *  amount: number,
 *  price: string,
 *  title: string,
 *  id: number,
 *  amount_remaining: number,
 *  available: boolean
 * }?} rewards
 * @property {{
 *  id: string,
 *  end_date: string,
 *  title: string,
 *  rate: number
 * } | boolean} sale
 */

/**
 * 
 * @param {GameDataOptions} opts 
 * @returns {Promise<GameData>}
 */
export async function getGameData(opts) {
  opts = opts || {};

  if (!opts.user) {
    throw new Error("Missing user");
  }
  if (!opts.game) {
    throw new Error("Missing game");
  }

  const secretParam = opts.secret ? `?secret=${opts.secret}` : '';
  const url = `https://${opts.user}.${ITCH_DOMAIN}/${opts.game}/data.json${secretParam}`;

  return await fetch(url).then(res => res.json())
};

export function attachBuyButton(element, opts) {
  var height, left, top, width;
  opts = opts || {};

  width = opts.width || 680;
  height = opts.height || 400;
  top = (window.height - height) / 2;
  left = (window.width - width) / 2;
  
  if (!opts.user) {
    throw new Error("Missing user");
  }
  if (!opts.game) {
    throw new Error("Missing game");
  }

  return element.addEventListener('click', function () {
    var newWindow;
    newWindow = window.open(
      `https://${opts.user}.${ITCH_DOMAIN}/${opts.game}/purchase?popup=1`,
      "purchase", "scrollbars=1, resizable=no, width=" + width +
      ", height=" + height + ", top=" + top + ", left=" + left
    );

    if (typeof newWindow.focus === "function") {
      newWindow.focus();
    }
    return false;
  });
};