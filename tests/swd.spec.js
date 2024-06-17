const { test } = require("@playwright/test");

const swdURL = "...";

test.beforeEach(async ({ page }) => {
  await page.goto(swdURL);
  await page.fill("#username", "...");
  await page.fill("#password", "...");
  await page.click("#fm1 > div > button");
  await page.click("#menuLeftForm\\:dashboard-menu > ul > li:nth-child(3) > a");
});

test("Document upload", async ({ page }) => {
  test.setTimeout(50000);

  await page.click("#j_idt65\\:j_idt69");
  await page.click("#fileUploadForm\\:fileType_label");
  await page.click("#fileUploadForm\\:fileType_3");
  await page.click("#fileUploadForm\\:executable > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default");

  await page.locator("#fileUploadForm\\:j_idt83_input").setInputFiles("C:\\Users\\dmonaldi\\Desktop\\Playwright\\ServicePack\\document.txt");
  
  await page.click("#fileUploadForm\\:j_idt83 > div.ui-fileupload-buttonbar.ui-widget-header.ui-corner-top > button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-icon-left.ui-fileupload-upload");

  await page.waitForSelector("#loader_wrapper", { state: "hidden" });

  await deleteSP(page, "document.txt");
});

test("Service pack upload", async ({ page }) => {
  test.setTimeout(100000);

  await page.click("#j_idt65\\:j_idt69");
  await page.click("#fileUploadForm\\:fileType_label");
  await page.click("#fileUploadForm\\:fileType_3");
  await page.click("#fileUploadForm\\:executable > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default");

  await page.locator("#fileUploadForm\\:j_idt83_input").setInputFiles("C:\\Users\\dmonaldi\\Desktop\\Playwright\\ServicePack\\ATA00004.024");
  
  await page.click("#fileUploadForm\\:j_idt83 > div.ui-fileupload-buttonbar.ui-widget-header.ui-corner-top > button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-icon-left.ui-fileupload-upload");

  await page.waitForSelector("#loader_wrapper", { state: "hidden" });

  await deleteSP(page, "ATA00004.024");
});

test("100MB Service pack upload", async ({ page }) => {
  test.setTimeout(120000);

  await page.click("#j_idt65\\:j_idt69");
  await page.click("#fileUploadForm\\:fileType_label");
  await page.click("#fileUploadForm\\:fileType_3");
  await page.click("#fileUploadForm\\:executable > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default");

  await page.locator("#fileUploadForm\\:j_idt83_input").setInputFiles("C:\\Users\\dmonaldi\\Desktop\\Playwright\\ServicePack\\ATA100MB.024");
  
  await page.click("#fileUploadForm\\:j_idt83 > div.ui-fileupload-buttonbar.ui-widget-header.ui-corner-top > button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-icon-left.ui-fileupload-upload");

  await page.waitForSelector("#loader_wrapper", { state: "hidden" });

  await deleteSP(page, "ATA100MB.024");
});

test("1GB Service pack upload", async ({ page }) => {
  test.setTimeout(1000000);

  await page.click("#j_idt65\\:j_idt69");
  await page.click("#fileUploadForm\\:fileType_label");
  await page.click("#fileUploadForm\\:fileType_3");
  await page.click("#fileUploadForm\\:executable > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default");

  await page.locator("#fileUploadForm\\:j_idt83_input").setInputFiles("C:\\Users\\dmonaldi\\Desktop\\Playwright\\ServicePack\\ATA1000MB.024");
  
  await page.click("#fileUploadForm\\:j_idt83 > div.ui-fileupload-buttonbar.ui-widget-header.ui-corner-top > button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-icon-left.ui-fileupload-upload");

  await page.waitForSelector("#loader_wrapper", { state: "hidden" });

  await deleteSP(page, "ATA1000MB.024");
});

test("Image ISO upload", async ({ page }) => {
  test.setTimeout(2000000);

  await page.click("#j_idt65\\:j_idt69");
  await page.click("#fileUploadForm\\:fileType_label");
  await page.click("#fileUploadForm\\:fileType_1");
  await page.click("#fileUploadForm\\:executable > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default");

  await page.locator("#fileUploadForm\\:j_idt83_input").setInputFiles("C:\\Users\\dmonaldi\\Desktop\\Playwright\\ServicePack\\ISO.iso");
  
  await page.click("#fileUploadForm\\:j_idt83 > div.ui-fileupload-buttonbar.ui-widget-header.ui-corner-top > button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-icon-left.ui-fileupload-upload");

  await page.waitForSelector("#loader_wrapper", { state: "hidden" });

  await deleteSP(page, "ISO.iso");
});

async function deleteSP(page, filename) {

  await page.click("#menuLeftForm\\:dashboard-menu > ul > li:nth-child(3)");

  await page.waitForSelector('#j_idt65\\:spTable_data tr');

  const rows = await page.$$('#j_idt65\\:spTable_data tr');

  for (const row of rows) {
    const filenameCell = await row.$('td:nth-child(2)');
    const filenameText = await filenameCell.innerText();

    if (filenameText.trim() === filename) {
      const deleteButton = await row.$('button[title="Delete"]');
      await page.on('dialog', dialog => dialog.accept());
      await deleteButton.click();
      break;
    }
  }
}