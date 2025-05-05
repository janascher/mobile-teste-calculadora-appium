describe('Calculator - Basic Operations', () => {
  const num0 = 'id:com.google.android.calculator:id/digit_0';
  const num1 = 'id:com.google.android.calculator:id/digit_1';
  const num2 = 'id:com.google.android.calculator:id/digit_2';
  const num4 = 'id:com.google.android.calculator:id/digit_4';
  const num5 = 'id:com.google.android.calculator:id/digit_5';
  const num6 = 'id:com.google.android.calculator:id/digit_6';
  const num7 = 'id:com.google.android.calculator:id/digit_7';
  const num8 = 'id:com.google.android.calculator:id/digit_8';
  const num9 = 'id:com.google.android.calculator:id/digit_9';

  const btnPlus = 'id:com.google.android.calculator:id/op_add';
  const btnMinus = 'id:com.google.android.calculator:id/op_sub';
  const btnMul = 'id:com.google.android.calculator:id/op_mul';
  const btnDiv = 'id:com.google.android.calculator:id/op_div';
  const btnEqual = 'id:com.google.android.calculator:id/eq';
  const btnClear = 'id:com.google.android.calculator:id/clr';

  const result = 'id:com.google.android.calculator:id/result_final';

  beforeEach(async () => {
    // Limpa a calculadora antes de cada teste
    const clearBtn = await $(btnClear);
    if (await clearBtn.isDisplayed()) {
      await $(btnClear).click();
    }
  });

  it('Should correctly add : 5 + 2 = 7', async () => {
    await $(num5).click();
    await $(btnPlus).click();
    await $(num2).click();
    await $(btnEqual).click();

    await expect(await $(result)).toHaveText('7');
  });

  it('Should correctly subtract: 10 - 4 = 6', async () => {
    await $(num1).click();
    await $(num0).click();
    await $(btnMinus).click();
    await $(num4).click();
    await $(btnEqual).click();

    await expect(await $(result)).toHaveText('6');
  });

  it('Should correctly multiply: 7 x 6 = 42', async () => {
    await $(num7).click();
    await $(btnMul).click();
    await $(num6).click();
    await $(btnEqual).click();

    await expect(await $(result)).toHaveText('42');
  });

  it('Should correctly divide: 180 / 9 = 20', async () => {
    await $(num1).click();
    await $(num8).click();
    await $(num0).click();
    await $(btnDiv).click();
    await $(num9).click();
    await $(btnEqual).click();

    await expect(await $(result)).toHaveText('20');
  });
});
