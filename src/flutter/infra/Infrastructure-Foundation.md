# Flutter Infrastructure Foundation

The Flutter Infrastructure Foundation Team is responsible for setting up, maintaining and improving the low level infrastructure used to build, test and release Flutter.


## DeviceLab Hardware

Flutter keeps a lab of test beds that include hosts and phones for all the supported platforms. These test beds are used to collect performance benchmarks and detect regressions.

As of May 2023 the Flutter DeviceLab contains 99 test beds with the following hardware and software:


<table>
  <tr>
   <td><strong>Host</strong>
   </td>
   <td><strong>Architecture</strong>
   </td>
   <td><strong>Phone</strong>
   </td>
   <td><strong>Count</strong>
   </td>
  </tr>
  <tr>
   <td>Linux
   </td>
   <td>X64
   </td>
   <td>Android
   </td>
   <td>36
   </td>
  </tr>
  <tr>
   <td>Windows
   </td>
   <td>X64
   </td>
   <td>Android
   </td>
   <td>6
   </td>
  </tr>
  <tr>
   <td>Windows
   </td>
   <td>Arm64
   </td>
   <td>Android
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>Windows
   </td>
   <td>Arm64
   </td>
   <td>
   </td>
   <td>9
   </td>
  </tr>
  <tr>
   <td>Mac
   </td>
   <td>X64
   </td>
   <td>iOS
   </td>
   <td>18
   </td>
  </tr>
  <tr>
   <td>Mac
   </td>
   <td>X64
   </td>
   <td>
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>Mac
   </td>
   <td>Arm64
   </td>
   <td>iOS
   </td>
   <td>12
   </td>
  </tr>
  <tr>
   <td>Mac
   </td>
   <td>Arm64
   </td>
   <td>
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>Mac
   </td>
   <td>X64
   </td>
   <td>Android
   </td>
   <td>9
   </td>
  </tr>
  <tr>
   <td>Mac
   </td>
   <td>Arm64
   </td>
   <td>Android
   </td>
   <td>5
   </td>
  </tr>
</table>



## VMs

Flutter uses Linux and Windows virtual machines to build and test Flutter. These VMs are auto-provisioned and distributed to 4 different pools. The following is the configuration distribution:


<table>
  <tr>
   <td style="background-color: null"><strong>LUCI pool</strong>
   </td>
   <td style="background-color: null"><strong>config</strong>
   </td>
   <td style="background-color: null"><strong>os</strong>
   </td>
   <td style="background-color: null"><strong>cpus</strong>
   </td>
   <td style="background-color: null"><strong>count</strong>
   </td>
   <td style="background-color: null"><strong>total cpus</strong>
   </td>
  </tr>
  <tr>
   <td style="background-color: null">luci.flutter.prod
   </td>
   <td style="background-color: null">e2-standard-32
   </td>
   <td style="background-color: null">Linux
   </td>
   <td style="background-color: null"><p style="text-align: right">
32</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
15</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
480</p>

   </td>
  </tr>
  <tr>
   <td style="background-color: null">luci.flutter.prod
   </td>
   <td style="background-color: null">n1-standard-8
   </td>
   <td style="background-color: null">Linux
   </td>
   <td style="background-color: null"><p style="text-align: right">
8</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
135</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
1080</p>

   </td>
  </tr>
  <tr>
   <td style="background-color: null">luci.flutter.try
   </td>
   <td style="background-color: null">e2-standard-32
   </td>
   <td style="background-color: null">Linux
   </td>
   <td style="background-color: null"><p style="text-align: right">
32</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
30</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
960</p>

   </td>
  </tr>
  <tr>
   <td style="background-color: null">luci.flutter.try
   </td>
   <td style="background-color: null">n1-standard-8
   </td>
   <td style="background-color: null">Linux
   </td>
   <td style="background-color: null"><p style="text-align: right">
8</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
137</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
1096</p>

   </td>
  </tr>
  <tr>
   <td style="background-color: null">luci.flutter.staging
   </td>
   <td style="background-color: null">e2-standard-32
   </td>
   <td style="background-color: null">Linux
   </td>
   <td style="background-color: null"><p style="text-align: right">
32</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
4</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
128</p>

   </td>
  </tr>
  <tr>
   <td style="background-color: null">luci.flutter.staging
   </td>
   <td style="background-color: null">n1-standard-8
   </td>
   <td style="background-color: null">Linux
   </td>
   <td style="background-color: null"><p style="text-align: right">
8</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
30</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
240</p>

   </td>
  </tr>
  <tr>
   <td style="background-color: null">luci.dart-internal.flutter
   </td>
   <td style="background-color: null">e2-standard-32
   </td>
   <td style="background-color: null">Linux
   </td>
   <td style="background-color: null"><p style="text-align: right">
32</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
20</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
640</p>

   </td>
  </tr>
  <tr>
   <td style="background-color: null">luci.flutter.prod
   </td>
   <td style="background-color: null">e2-highmem-8
   </td>
   <td style="background-color: null">Windows
   </td>
   <td style="background-color: null"><p style="text-align: right">
8</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
59</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
472</p>

   </td>
  </tr>
  <tr>
   <td style="background-color: null">luci.flutter.try
   </td>
   <td style="background-color: null">e2-highmem-8
   </td>
   <td style="background-color: null">Windows
   </td>
   <td style="background-color: null"><p style="text-align: right">
8</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
130</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
1040</p>

   </td>
  </tr>
  <tr>
   <td style="background-color: null">luci.flutter.staging
   </td>
   <td style="background-color: null">e2-highmem-8
   </td>
   <td style="background-color: null">Windows
   </td>
   <td style="background-color: null"><p style="text-align: right">
8</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
12</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
96</p>

   </td>
  </tr>
  <tr>
   <td style="background-color: null">luci.dart-internal.flutter
   </td>
   <td style="background-color: null">e2-highmem-8
   </td>
   <td style="background-color: null">Windows
   </td>
   <td style="background-color: null"><p style="text-align: right">
8</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
20</p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
160</p>

   </td>
  </tr>
  <tr>
   <td style="background-color: null">
   </td>
   <td style="background-color: null">
   </td>
   <td style="background-color: null">
   </td>
   <td style="background-color: null">
   </td>
   <td style="background-color: null">
   </td>
   <td style="background-color: null">
   </td>
  </tr>
  <tr>
   <td style="background-color: null"><strong>Totals</strong>
   </td>
   <td style="background-color: null">
   </td>
   <td style="background-color: null">
   </td>
   <td style="background-color: null">
   </td>
   <td style="background-color: null"><p style="text-align: right">
<strong>592</strong></p>

   </td>
   <td style="background-color: null"><p style="text-align: right">
<strong>6392</strong></p>

   </td>
  </tr>
</table>



