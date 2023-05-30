export function title(value) {
  return function (ctx, next) {
    ctx.customTitle = value;
    next();
  };
}
