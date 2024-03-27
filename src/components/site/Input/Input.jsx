import React from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';
import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import { useEffect } from 'react';
import { useState } from 'react';
import { Interweave } from 'interweave';
import OutsideClickHandler from 'react-outside-click-handler';
import { PatternFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import { calculatePostCost } from '../../../redux/actions/post/calculatePostCost';
import { useSelector } from 'react-redux';
import { callPostCalculator } from '../../../utils/callPostCalculator';
const Input = ({ label, placeholder, isPhone, isSearch, isSelect, grey, lg, name, rules = { required: true }, form, options = [], rows, isTextarea, isNumber, onSearch = () => {}, onClickOption = () => {}, showSearchOptions, style = {} }) => {
  const watchVal = form.watch(name);
  const [searchTerm, setSearchTerm] = useState('');
  const {
    calculatePostCost: { error: calculateError },
  } = useSelector((state) => state.post);
  const { activeTheme } = useSelector((state) => state.app);
  useEffect(() => {
    if (isSearch) {
      setShowOptions(false);
      const delayDebounceFn = setTimeout(() => {
        setShowOptions(true);
        onSearch(searchTerm);
      }, 300);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchTerm]);
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();
  const getError = () => {
    if (form.formState.errors[name]) {
      if (Array.isArray(form.formState.errors[name])) {
        for (let gameInputErr of form.formState.errors[name]) {
          if (gameInputErr) {
            return gameInputErr?.value?.message || 'Заполните поля';
          }
        }
      } else {
        return form.formState.errors[name].message || 'Заполните поля';
      }
    } else {
      return null;
    }
  };

  console.log(watchVal);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        {label && (
          <div className={'nameInput mb-10 mt-10'} style={{ userSelect: 'none' }}>
            {label}
          </div>
        )}

        {isSearch ? (
          <OutsideClickHandler
            onOutsideClick={() => {
              if (searchTerm !== watchVal?.label) {
                form.setValue(name, null);
              } else if (watchVal?.precision == 'HOUSE' && showOptions) {
                callPostCalculator(watchVal);
              }
              setShowOptions(false);
            }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <input
                  autoComplete="off"
                  type="text"
                  className={'form-control'}
                  placeholder={placeholder}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                  onFocus={() => {
                    setShowOptions(true);
                  }}
                />{' '}
              </div>

              {searchTerm && (
                <>
                  {watchVal?.precision !== 'HOUSE' ? (
                    <div class="mt-1 ml-2" style={{ fontSize: '14px', color: '#eb5757' }}>
                      Адрес не валидный
                    </div>
                  ) : (
                    <div class="mt-1 ml-2" style={{ fontSize: '14px', color: '#36b37e' }}>
                      Адрес найден
                    </div>
                  )}
                </>
              )}

              {showOptions && showSearchOptions && options?.length >= 1 && (
                <div className={clsx(styles.options, 'card__item', activeTheme == 'dark' && styles.optionsDark)}>
                  {options?.map((item) => (
                    <div
                      className={clsx(styles.option)}
                      onClick={() => {
                        if (watchVal?.label == item?.label) {
                          setShowOptions(false);
                          callPostCalculator(watchVal);
                        } else {
                          setSearchTerm(item?.label);
                          setShowOptions(false);
                          onClickOption(item);
                        }
                      }}>
                      <Interweave content={item?.label?.replace(new RegExp(searchTerm, 'ig'), `<b>${searchTerm}</b>`)} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </OutsideClickHandler>
        ) : isSelect ? (
          <OutsideClickHandler
            onOutsideClick={() => {
              setShowOptions(false);
            }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <input
                  autoComplete="off"
                  type="text"
                  className={'form-control'}
                  placeholder={placeholder}
                  value={watchVal?.label ?? ''}
                  onChange={(e) => {}}
                  onFocus={() => {
                    setShowOptions(true);
                  }}
                  style={{ caretColor: 'transparent', cursor: 'pointer' }}
                />{' '}
              </div>
              {calculateError && (
                <div class="mt-1" style={{ fontSize: '14px', color: '#eb5757' }}>
                  Доставка в эту страну недоступна
                </div>
              )}
              {showOptions && showSearchOptions && options?.length >= 1 && (
                <div className={clsx(styles.options, 'card__item', activeTheme == 'dark' && styles.optionsDark)} style={{ maxHeight: '300px', overflow: 'auto' }}>
                  {options?.map((item) => (
                    <div
                      className={clsx(styles.option, watchVal?.value == item?.value && styles?.optionActive)}
                      onClick={() => {
                        const itemDto = { ...item, normalizedAddress: '', city: '', country: item?.label, region: '', addressGuid: item?.value, postalCode: '', recipientCountryNumericCode: item?.value };
                        setShowOptions(false);
                        onClickOption(itemDto);
                        callPostCalculator(itemDto);
                      }}>
                      {item?.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </OutsideClickHandler>
        ) : isNumber ? (
          <Controller control={form.control} name={name} rules={rules} render={({ field: { onChange, name, value } }) => <NumericFormat autoComplete="off" className={'form-control'} placeholder={placeholder} name={name} value={value} onValueChange={(val) => onChange(val.formattedValue)} />} />
        ) : isPhone ? (
          <Controller
            control={form.control}
            name={name}
            rules={rules}
            render={({ field: { onChange, name, value } }) => <PatternFormat autoComplete="off" className={'form-control'} placeholder={placeholder} name={name} value={value} mask="*" format={'+7 (###) ###-##-##'} onValueChange={(val) => onChange(val.floatValue)} />}
          />
        ) : isTextarea ? (
          <textarea rows={rows} type="text" className={clsx(styles.input, grey && styles.inputGrey, lg && styles.inputBig)} placeholder={placeholder} {...form.register(name, rules)} />
        ) : (
          <input autoComplete="off" style={{ ...style }} type="text" className={'form-control'} placeholder={placeholder} {...form.register(name, rules)} />
        )}
      </div>{' '}
      {getError() && (
        <div class="mt-1" style={{ fontSize: '14px', color: '#eb5757' }}>
          {getError()}
        </div>
      )}
    </>
  );
};

export default Input;
