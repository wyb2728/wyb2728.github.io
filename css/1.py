import pandas as pd
df = pd.read_excel(r"D:\tea.xlsx", sheet_name='Sheet1', header=0)
column_data1 = df['最高温度'].tolist()
column_data2 = df['最低温度'].tolist()
column_data3 = df['日期'].tolist()
column_data4 = df['空气质量'].tolist()
# 打印列表以验证数据
print(column_data1)
print(column_data2)
print(column_data3)
print(column_data4)
